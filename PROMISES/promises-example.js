//creating promise(producting code)
const promisObj = new Promise((resolve, reject) => {
    setTimeout(() => {
        const setPromise = true
        if (setPromise) {
           resolve('promise is successfull')
        } else {
            reject('unsuccess full')
       }
    },3000)
})
console.log(promisObj)
//consuming code
promisObj
    .then((response) => { console.log(response) })
    .catch((error) => console.log(error))
