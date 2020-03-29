// (function() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 300)
//         setTimeout(() => {
//             reject();
//         }, 500)
//     })
//     console.log(promise);
//     setTimeout(() => {
//         console.log(promise);
//     }, 800)
// })();

// console.log(async function () {
//     return 1;
// }());

// console.log(function () {
//     return new Promise((resolve, reject) => {
//         resolve(1)
//     })
// }());

(function() {
    const result = async function () {
        var content = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(2);
            }, 500)
        })
        console.log(content);
        return 1
    }()

    setTimeout(() => {
        console.log(result);
    }, 800)
})()