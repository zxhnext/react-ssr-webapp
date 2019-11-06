import React, { Component } from 'react'
import Helmet from 'react-helmet'
import {
  observer,
  inject,
} from 'mobx-react'
// import PropTypes from 'prop-types'
// import { AppState } from '../../store/app-state'

import Container from '../layout/container'

@inject('appState') @observer
export default class TopicList extends Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {
    // do
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      }, 1000)
    })
  }

  changeName(event) {
    this.props.appState.changeName(event.target.value)
  }

  render() {
    return (
      <Container>
        <Helmet>
          <title>话题列表</title>
          <meta name="话题列表" content="这是话题列表" />
        </Helmet>
        <input type="text" onChange={this.changeName} />
        <div>{this.props.appState.msg}</div>
      </Container>
    )
  }
}

// TopicList.PropTypes = {
//   appState: PropTypes.instanceOf(AppState),
// }
