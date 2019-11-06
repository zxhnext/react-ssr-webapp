import React from 'react'
import {
  Route,
  Redirect,
  // withRouter,
} from 'react-router-dom'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
import Test from '../views/test/api-test'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} key="/" exact />,
  <Route path="/list" component={TopicList} key="list" />,
  <Route path="/test" component={Test} key="test" />,
  <Route path="/detail" component={TopicDetail} key="detail" />,
]
