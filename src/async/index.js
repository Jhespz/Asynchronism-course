const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something async'), 4000)
            : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something, 1)
}

console.log('Before 1');
doSomething();
console.log('After 1');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something, 2)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 2');
anotherFunction();
console.log('After 2');