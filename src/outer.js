exports.name = "a"
module.exports = {
    add: function() {
        console.log("i am add function");
    },
    count: 1
}
setTimeout(() => {
    console.log("我是outer里的", exports);
    console.log("我是outer里的",module.exports);
}, 1000)