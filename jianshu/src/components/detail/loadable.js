// 异步组件

import Loadable from "react-loadable";
import React from "react";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <div>loading...</div>;
  },
});

export default function load() {
  return <LoadableComponent />;
}
