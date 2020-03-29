// 事件循环
const eventloop = {
    // 消息队列
    queue: [],
    loop() {
        while(this.queue.length) {
            let callback = this.queue.shift();
            callback()
        }
        // 不断检测是否有消息可以执行
        setTimeout(this.loop.bind(this), 50)
    },

    add(callback) {
        this.queue.push(callback)
    }
}

eventloop.loop();

setTimeout(() => {
    eventloop.add(function() {
        console.log(1);
    })
}, 500)

setTimeout(() => {
    eventloop.add(function() {
        console.log(2);
    })
}, 800)