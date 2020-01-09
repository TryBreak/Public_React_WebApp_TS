import React from "react";
import { RouterView } from "@/utils/RouterView";

export default class Demo extends React.Component<pageProps> {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h1>这里是首页</h1>
        <RouterView path={match.path} />
      </div>
    );
  }
}
