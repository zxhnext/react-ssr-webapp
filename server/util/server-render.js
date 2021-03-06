const ReactDomServer = require('react-dom/server')
const asyncBootstrapper = require('react-async-bootstrapper').default // 支持react异步
const serialize = require('serialize-javascript') // 序列化js对象
const Helmet = require('react-helmet').default
const ejs = require('ejs')
const SheetsRegistry = require('react-jss').SheetsRegistry
const create = require('jss').create
const preset = require('jss-preset-default').default
const colors = require('@material-ui/core/colors')
const createMuiTheme = require('@material-ui/core/styles').createMuiTheme

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson()
    return result
  }, {})
}

module.exports = (bundle, template, req, res) => {
  return new Promise((resolve, reject) => {
    const createStoreMap = bundle.createStoreMap
    const createApp = bundle.default

    const routerContext = {}
    const stores = createStoreMap()

    const theme = createMuiTheme({
      palette: {
        primary: colors.pink,
        accent: colors.lightBlue,
        type: 'light'
      },
      status: {
        danger: 'orange'
      }
    })

    const sheetsRegistry = new SheetsRegistry()
    const jss = create(preset())

    const app = createApp(stores, routerContext, req.url, sheetsRegistry, jss, theme)

    asyncBootstrapper(app).then(() => {
      if (routerContext.url) { // 如果有重定向的路由，直接在服务端重定向
        res.status(302).setHeader('Location', routerContext.url) // 重定向
        res.end()
        return
      }

      const helmet = Helmet.rewind()
      const state = getStoreState(stores)
      const content = ReactDomServer.renderToString(app)

      const html = ejs.render(template, {
        appString: content,
        initialState: serialize(state),
        meta: helmet.meta.toString(),
        link: helmet.link.toString(),
        style: helmet.style.toString(),
        title: helmet.title.toString(),
        materialCss: sheetsRegistry.toString()
      })

      res.send(html)
      resolve()
      // res.send(template.replace('<!-- app -->', content))
    }).catch(reject)
  })
}
