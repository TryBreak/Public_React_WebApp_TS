import { observable, action } from 'mobx';

class OthersStore {
  @observable str;

  constructor() {
    this.str = '这个值来自其他模块';
  }
  @action
  getData = () => {
    fetch('api/comments/show?id=4199740256395164&page=1').then(res => {
      res.json().then(
        action(data => {
          this.str = data.msg;
        })
      );
    });
  };
}

const otherStore = new OthersStore(); //通过new 创建一个homeStore对象实例通过export导出

export default otherStore;
