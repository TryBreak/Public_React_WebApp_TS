import React from "react";
import MobxTest1 from "./module/MobxTest1";
import MobxTest2 from "./module/MobxTest2";
export default class extends React.Component<pageProps> {
  render() {
    return (
      <div className="Demo">
        <h2>状态管理演示</h2>
        <MobxTest1 {...this.props} />
        <MobxTest2 {...this.props} />
      </div>
    );
  }
}
