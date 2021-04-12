//---------------------Ejemplo 1--------------------

// function sum(num1, num2) {
//     return num1 + num2;
// }

// function calc(num1, num2, callback) {
//     return callback(num1, num2);
// }

// console.log(calc(6,2,sum));


//---------------------Ejemplo 2--------------------


function date(callback) {
    console.log('primer console log', new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date)
    }, 3000);
}

function printDate(dateNow) {
    console.log('segundo console log', dateNow)
}

date(printDate)