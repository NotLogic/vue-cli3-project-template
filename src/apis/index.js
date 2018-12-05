import {http} from '../plugins/axios'
const URL = {
  // 搜索
  search: '',
  login: '',
  exitLogin: ''
}
const METHODS = ['get', 'delete', 'head', 'post', 'put', 'patch', '']
function methodIsEffective(method){
  return METHODS.indexOf(method) != -1
}
// 调用此方法时必须确保传入的参数有效，符合axios传参规范
function commonHttp(params, config){
  return new Promise(function(resolve, reject){
    http(params, config).then(function(res){
      resolve(res.data)
    }).catch(function(err){
      reject(err)
    })
  })
}

export function submitSearch(data,config){
  var url = URL.search
  var params = {
    url,
    method: 'post',
    data
  }
  return commonHttp(params, config)
}

export function submitLogin(data, config){
  var url = URL.login
  var params = {
    url,
    method: 'post',
    data
  }
  return commonHttp(params, config)
}

export function exitLogin(data, config){
  var url = URL.exitLogin
  var params = {
    url,
    method: 'post',
    data
  }
  return commonHttp(params, config)
}