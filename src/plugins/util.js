"use strict";

import Vue from 'vue';
import * as logic from "@/libs/utils";
// 为什么这里zz使用Plugin就会导致只有一个插件能用，其他插件变成undefined
var zz = {}
zz.install = function(Vue) {
  Vue.logic = logic;
  window.logic = logic;
  Object.defineProperties(Vue.prototype, {
    logic: {
      get() {
        return logic;
      }
    },
    $logic: {
      get() {
        return logic;
      }
    },
  });
};

Vue.use(zz)

export default zz;
