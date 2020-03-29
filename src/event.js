const EventEmitter = require("events").EventEmitter;

class Event extends EventEmitter {
    constructor(props) {
        super(props)
        setInterval(() => {
            this.emit("time", {now: new Date()})
        }, 3000)
    }
}

const eventObj = new Event;
eventObj.addListener('time', (res) => {
    console.log(res.now);
})