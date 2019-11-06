import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Routes from '../config/router'

export default class App extends Component {
  componentDidMount() {
    // do
  }

  render() {
    return [
      <div key="header">
        <Link to="/">首页</Link>
        <Link to="/detail">详情页</Link>
      </div>,
      <Routes key="routes" />,
    ]
  }
}

// export default () => <div>react!!!</div>
