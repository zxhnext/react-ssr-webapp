const axios = require('axios')
const webpack = require('webpack')
const path = require('path')
const MemoryFs = require('memory-fs') // 将文件不写到硬盘上，写到内存中
const ReactDomServer = require('react-dom/server')
const proxy = require('http-proxy-middleware') // 代理静态资源

const serverConfig = require('../../build/webpack.server.config')

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html')
      .then(res => {
        resolve(res.data)
      })
      .catch(reject)
  })
}

// const NativeModule = require('module')
// const vm = require('vm')

// `(function(exports, require, module, __finename, __dirname){ ...bundle code })`
// const getModuleFromString = (bundle, filename) => {
//   const m = { exports: {} }
//   const wrapper = NativeModule.wrap(bundle)
//   const script = new vm.Script(wrapper, {
//     filename: filename,
//     displayErrors: true
//   })
//   const result = script.runInThisContext()
//   result.call(m.exports, m.exports, require, m)
//   return m
// }

const mfs = new MemoryFs()
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs // 用内存读写
const Module = module.constructor // module.export的module

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
  // const m = getModuleFromString(bundle, 'server-entry.js')
  // serverBundle = m.exports

  // 将字符串转化为模块
  const m = new Module()
  m._compile(bundle, 'server-entry.js') // server-entry.js打包生成的文件名
  serverBundle = m.exports.default
})

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))

  app.get('*', (req, res) => {
    getTemplate().then(template => {
      const content = ReactDomServer.renderToString(serverBundle)
      res.send(template.replace('<!-- app -->', content))
    })
  })
}
