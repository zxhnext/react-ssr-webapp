import {
  observable,
  computed,
  autorun,
  action,
} from 'mobx'

export default class AppState {
  constructor({count, name} = {count:0, name: 'zxhnext'}) {
    this.count = count
    this.name = name
  }

  @observable count

  @observable name

  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }

  @action
  changeName = (name) => {
    this.name = name
  }

  toJson() { // 用这个方法去拿到服务端渲染的数据
    return {
      count: this.count,
      name: this.name,
    }
  }
}
// const appState = new AppState()

// export default appState
