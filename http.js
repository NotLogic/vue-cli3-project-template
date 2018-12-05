const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const types = require('./mine').types
const PORT = 3000
http.createServer(function (request, response) {
  var pathName = url.parse(request.url).pathname
  pathName = pathName == '/' ? '/index.html' : pathName
  var realPath = decodeURI(path.join("dist", pathName)); // 路径为项目文件夹
  
  if (pathName == '/favicon.ico') {

  } else {
    // 判断路径是否存在
    // fs.exists 废弃的     使用 fs.stat() 或 fs.access() 代替。
    fs.stat(realPath, function (err, stats) {
      // 当vue-router使用history模式时，服务端不再返回404.所有未请求到的资源均返回至index.html
      if (err) {
        console.log('err  realPath: ',realPath)
        response.writeHead(404, {
          'Content-Type': types.txt
        })
        response.write("This request URL " + pathName + " was not found on this server.")
        response.end()
      } else {
        fs.readFile(realPath, function (err, data) {
          if (err) {
            response.writeHead(500, {
              'Content-Type': types.txt
            })
            response.end(err)
          } else {
            var type = pathName.split('.')[pathName.split('.').length - 1]
            var responseType = types[type]
            if(!responseType){
              // 未知类型当文本处理
              responseType = types.txt
            }
            response.writeHead(200, {
              'Content-Type': responseType
            })
            response.write(data, 'binary')
          }
          response.end()
        })
      }
    })
  }

}).listen(PORT)
console.log("Server runing at port: " + PORT + ".");