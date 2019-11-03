import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line

import App from './App.jsx'

// ReactDOM.hydrate(<App />, document.getElementById('root'))

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) { // 配置HotModuleReplacement，即修改页面时页面局部刷新
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default // eslint-disable-line
    // ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
    render(NextApp)
  })
}
