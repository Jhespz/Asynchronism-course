
const somethingWillhappen1 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoops!')
        }
    })
}

somethingWillhappen1()
    .then(response => console.log(response))
    .catch(err => console.log(err))


const somethingWillhappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoops"')
                reject(error)
        }
    })
}

somethingWillhappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err))

//Multiples promesas

Promise.all([somethingWillhappen1(), somethingWillhappen2()])
    .then(response => {
        console.log('Array of results', response)
    })

    .catch(err => {
        console.error(err)
    })

/*
Hey!
True
Array of results [ 'Hey!', 'True' ]
*/