/* function sayHello(){
    console.log('_______________________------')
    console.log('Hello')
    console.log('-------------------')
}

// sayHello()

let a = sayHello
a()
*/
/*
function sayHello(name){
    console.log('_______________________------')
    console.log('Hello ' + name)
    console.log('-------------------')
}

sayHello('Bob')
sayHello('Davies')
*/

function calculateTax(sales_Amount) {
    let result =sales_Amount * 0.0825;
    return result;
}

let tax = calculateTax(100);
console.log(tax);