const axios = require('axios')
const webpack = require('webpack')
const path = require('path')
const MemoryFs = require('memory-fs') // 将文件不写到硬盘上，写到内存中
const proxy = require('http-proxy-middleware') // 代理静态资源

const serverRender = require('./server-render')
const serverConfig = require('../../build/webpack.server.config')

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/server.ejs')
      .then(res => {
        resolve(res.data)
      })
      .catch(reject)
  })
}

// const Module = module.constructor // module.export的module

const NativeModule = require('module') // node中module.exports的module
const vm = require('vm')

const getModuleFromString = (bundle, filename) => {
  const m = { exports: {} }
  const wrapper = NativeModule.wrap(bundle) // 将可执行的js包装为 `(function(exports, require, module, __finename, __dirname){ ...bundle code })`
  const script = new vm.Script(wrapper, {
    filename: filename,
    displayErrors: true
  })
  const result = script.runInThisContext() // 定义执行环境
  result.call(m.exports, m.exports, require, m)
  return m
}

const mfs = new MemoryFs()
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs // 用内存读写

let serverBundle
serverCompiler.watch({}, (err, stats) => { // 监听文件变化，重新打包
  if (err) throw err
  stats = stats.toJson() // webpack打包信息
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.log(warn))

  // 读取serverBundle路径
  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )

  // 读取serverBundle内容
  const bundle = mfs.readFileSync(bundlePath, 'utf-8')

  // 实际环境下dependencies中的包引入方式
  const m = getModuleFromString(bundle, 'server-entry.js')

  // 将字符串转化为模块, 实际环境下dependencies中的包我们并不需要打到server-entry.js中，只需在node服务器中去引入node_modules中的包即可
  // 所以实际环境下在server-entry中是拿不到dependencies中的包的
  // const m = new Module()
  // m._compile(bundle, 'server-entry.js') // server-entry.js打包生成的文件名

  serverBundle = m.exports
  // serverBundle = m.exports.default
  // createStoreMap = m.exports.createStoreMap
})

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))

  app.get('*', (req, res, next) => {
    if (!serverBundle) {
      return res.send('页面加载中，请稍后～')
    }
    getTemplate().then(template => {
      return serverRender(serverBundle, template, req, res)
    }).catch(next)
  })
}
