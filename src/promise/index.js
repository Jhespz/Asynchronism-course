
const somethingWillhappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoops!')
        }
    })
}

somethingWillhappen()
    .then(response => console.log(response))
    .catch(err => console.log(err))