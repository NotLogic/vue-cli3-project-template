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
      var errorCodeTxtMap = {
        0: '请求错误',
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
      var errorCode = 0
      switch (error.response.status) {
        case 400:
          errorCode = 400
          break			
        case 401:
          errorCode = 401
          break			
        case 403:
          errorCode = 403
          break			
        case 404:
          errorCode = 404
          break			
        case 408:
          errorCode = 408
          break			
        case 500:
          errorCode = 500
          break			
        case 501:
          errorCode = 501
          break			
        case 502:
          errorCode = 502
          break			
        case 503:
          errorCode = 503
          break			
        case 504:
          errorCode = 504
          break			
        case 505:
          errorCode = 505
          break			
        default: errorCode = 0
      }
      var errTxt = errorCodeTxtMap[errorCode] ? errorCodeTxtMap[errorCode] : errorCodeTxtMap[0]
      Message.error({
        showClose: true,
        message: errTxt,
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
