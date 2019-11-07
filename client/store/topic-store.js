import {
  observable,
  toJS,
  computed,
  action,
  extendObservable,
} from 'mobx'

import {
  get,
  post,
} from '../util/http'

import {
  topicSchema,
} from '../util/variable-define'

const createTopic = (data) => {
  return Object.assign({}, topicSchema, data)
}

export class Topic {
  constructor(data) {
    extendObservable(this, data)
  }
  @observable syncing = false
}

export class TopicStore {
  @observable topics
  @observable details
  @observable createdTopics
  @observable syncing = false
  @observable tab = undefined

  constructor(
    { syncing = false, topics = [], tab = null, details = [] } = {},
  ) {
    this.syncing = syncing
    this.topics = topics.map(topic => new Topic(createTopic(topic)))
  }

  @action fetchTopics(tab) {
    return new Promise((resolve, reject) => {
      if (tab === this.tab && this.topics.length > 0) {
        resolve()
      } else {
        this.tab = tab
        this.topics = []
        this.syncing = true
        get('/topics', {
          mdrender: false, // 是否将makedown渲染为html字符串
          tab,
        }).then(resp => {
          if (resp.success) {
            const topics = resp.data.map(topic => {
              return new Topic(createTopic(topic))
            })
            this.topics = topics
            this.syncing = false
            resolve()
          } else {
            this.syncing = false
            reject()
          }
        }).catch(err => {
          reject(err)
        })
      }
    })
  }
}