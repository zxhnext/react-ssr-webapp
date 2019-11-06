import React, { Component } from 'react'
import Routes from '../config/router'

import AppBar from './layout/app-bar'

export default class App extends Component {
  componentDidMount() {
    // do
  }

  componentDidCatch(error, info) {
    console.error(error) // eslint-disable-line
    console.log(info) // eslint-disable-line
  }

  render() {
    return [
      <AppBar location={this.props.location} key="app-bar" />,
      <Routes key="routes" />,
    ]
  }
}

// export default () => <div>react!!!</div>
