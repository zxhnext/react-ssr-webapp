import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, pink } from '@material-ui/core/colors';

import App from './views/App'
import AppState from './store/app-state'
// ReactDOM.hydrate(<App />, document.getElementById('root'))

const theme = createMuiTheme({
  palette: {
    primary: pink,
    accent: lightBlue,
    type: 'light',
  },
  status: {
    danger: 'orange',
  },
});

const initialState = window.__INITIAL_STATE__ || {} // eslint-disable-line

const createClientApp = (TheApp) => {
  class ClientApp extends React.Component {
    componentDidMount() {
      const jssStyles = document.getElementById('jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return <TheApp {...this.props} />
    }
  }

  return ClientApp
}

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Component />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

render(createClientApp(App))

if (module.hot) { // 配置HotModuleReplacement，即修改页面时页面局部刷新
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default // eslint-disable-line
    // ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
    render(createClientApp(NextApp))
  })
}
