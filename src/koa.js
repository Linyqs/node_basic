const koa = require('koa')
const mount = require('koa-mount')
const fs = require("fs")
let count = 0;

const app = new koa()
app.use(
    mount('/favicon.ico', function(ctx) {
        ctx.sttaus = 200;
    })
    
)
app.use(
    mount('/test', function(ctx) {
        ctx.status = 200
        // ctx.response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        ctx.body = fs.readFileSync(__dirname + '/pages/hello.html', 'utf-8')
    }, )
)

const gameKoa = new koa()
gameKoa.use(
    async function(ctx, next) {
        console.log('1 开始')
        await next()
        if(ctx.response.win) {
            count++;
        }
        console.log('1 结束')
        console.log(count)
    }
)

gameKoa.use(
    async function(ctx, next) {
        console.log('2 开始')
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                ctx.status = 200
                ctx.body = 'yes'
                console.log("异步函数执行完了");
                ctx.response.win = true
                resolve()
            }, 500)
        })
        console.log('2 结束')
        console.log(ctx.response.win)
        next()
    }
)
app.use(
    mount('/game', gameKoa)
)
app.listen(3000)