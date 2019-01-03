"use strict";

import Vue from 'vue';
import axios from "axios";
import Message from 'element-ui/packages/message/index.js';
import { MessageBox } from 'element-ui';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

export const http = axios.create(config);
http.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function(response) {
    // Do something with response data
    // 登录超时，提示进行重新登录
    if(false){
      MessageBox.confirm('请点击确定前往登录页进行重新登录', '登录超时', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        
      })
    }
    return response;
  },
  function(error) {
    // Do something with response error
    if (error && error.response) {
      var map = {
        'default': '请求错误',
        400: '请求错误',
        401: '未授权，请进行授权',
        403: '拒绝访问',
        404: `请求地址出错: ${error.response.config.url}`,
        408: '请求超时',
        500: '服务器内部错误',
        501: '服务未实现',
        502: '网关错误',
        503: '服务不可用',
        504: '网关超时',
        505: 'HTTP版本不受支持',
      }
      var txt = map[error.response.status] || map['default']
      Message.error({
        showClose: true,
        message: txt,
        type: 'error'
      })
    }
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = http;
  window.axios = http;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return http;
      }
    },
    $axios: {
      get() {
        return http;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
