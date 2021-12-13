const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('promise 1 resolve') 
    },3000)
})
const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('promise 2 resolve')
    },2000)
})
Promise.all([promise1, promise2])
    .then((values) => {
        console.log(values)
    })