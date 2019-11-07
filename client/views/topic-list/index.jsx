import React, { Component } from 'react'
import Helmet from 'react-helmet'
import {
  observer,
  inject,
} from 'mobx-react'
// import PropTypes from 'prop-types'
// import { AppState } from '../../store/app-state'

import {Tabs, Tab } from '@material-ui/core'

import Container from '../layout/container'
import TopicListItem from './list-item'

@inject('appState') @observer
export default class TopicList extends Component {
  constructor() {
    super()
    this.state = {
      tabIndex: 0
    }
    this.changeTab = this.changeTab.bind(this)
    this.listItemClick = this.listItemClick.bind(this)
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

  changeTab(e, index) {
    this.setState({
      tabIndex: index
    })
  }

  listItemClick() {}

  render() {
    const { tabIndex } = this.state
    const topic = {
      title: "这是title",
      username: "zxhnext",
      reply_count: 20,
      visit_count: 30,
      create_at: "3857575566969",
      tab: "share"
    }
    return (
      <Container>
        <Helmet>
          <title>话题列表</title>
          <meta name="话题列表" content="这是话题列表" />
        </Helmet>
        <Tabs value={tabIndex} onChange={this.changeTab}>
          <Tab label="全部" />
          <Tab label="分享" />
          <Tab label="工作" />
          <Tab label="问答" />
          <Tab label="精品" />
          <Tab label="测试" />
        </Tabs>
        <TopicListItem onClick={this.listItemClick} topic={topic} />
      </Container>
    )
  }
}

// TopicList.propTypes = {
//   appState: PropTypes.object.isRequired,
// }
