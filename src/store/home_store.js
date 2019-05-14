import { observable, action, computed } from 'mobx';

class HomeStore {
  @observable text;
  @observable num;

  constructor() {
    this.num = 0;
    this.text = 'Hello Word!';
  }

  @action
  plus = () => {
    this.num = ++this.num;
  };

  minus = () => {
    this.num = --this.num;
  };

  change = str => {
    this.text = str;
  };
  @computed
  get plusNum() {
    return this.num + 5;
  }
}

const homeStore = new HomeStore(); //通过new 创建一个homeStore对象实例通过export导出

export default homeStore;
