const express = require('express')
const favicon = require('serve-favicon')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

const serverRender = require('./util/server-render')

const isDev = process.env.NODE_ENV === 'development'
const app = express()

app.use(bodyParser.json()) // 把application数据转为json
app.use(bodyParser.urlencoded({ extended: false })) // 表单请求数据

app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'user_id', // cookie的id
  resave: false, // 每次请求是否重新生成一个cookie
  saveUninitialized: false,
  secret: 'pawn' // 用该字符串去加密cookie
}))

app.use(favicon(path.join(__dirname, '../favicon.ico')))

app.use('/api/user', require('./util/handle-login'))
app.use('/api', require('./util/proxy'))

if (!isDev) {
  const serverEntry = require('../dist/server-entry')
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8')
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  app.get('*', (req, res, next) => {
    serverRender(serverEntry, template, req, res).catch(next)
    // const appString = ReactSSR.renderToString(serverEntry)
    // res.send(template.replace('<!-- app -->', appString))
  })
} else {
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

app.use(function (error, req, res, next) { // 处理全局error, 必须写齐这4个参数express才会认为是全局处理错误函数
  console.error(error)
  res.status(500).send(error)
})

app.listen(3333, () => {
  console.log('3333端口已启动')
})
