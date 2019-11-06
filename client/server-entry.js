import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'

import { JssProvider } from 'react-jss'
import { ThemeProvider, createGenerateClassName } from '@material-ui/core/styles'

import App from './views/App'
import { createStoreMap } from './store'

// 让mobx在服务端渲染的时候不会重复数据变换
useStaticRendering(true)

export default (stores, routerContext, url, sheetsRegistry, jss, theme) => {
  jss.options.createGenerateClassName = createGenerateClassName
  return (
    <Provider {...stores}>
      <StaticRouter context={routerContext} location={url}>
        <JssProvider registry={sheetsRegistry} jss={jss}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </JssProvider>
      </StaticRouter>
    </Provider>
  )
}

export { createStoreMap }
