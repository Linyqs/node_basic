var express = require('express')
var app = express()
let count = 0;
app.use(function middleware1(req, res, next) {
  console.log('1 开始')
  next()
  if(res.win) {
      count++;
  }
  console.log('1 结束')
  console.log(count)
  setTimeout(() => {
    if(res.win) {
        count++;
    }
    console.log(count);
  }, 1000)
})

app.use(function middleware2(req, res, next) {
  console.log('2 开始')
  setTimeout(() => {
      console.log("异步函数执行完了");
      res.win = true
  }, 500)
  next()
  console.log('2 结束')
})

app.get('/', function handler(req, res) {
  res.send('ok')
  console.log('=================')
})
app.listen(8080)
