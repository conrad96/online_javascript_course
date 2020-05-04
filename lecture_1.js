//type casting
const item = 42

const explicit  = String(item)

//console.log( typeof explicit)

//object

const x = new Object();

x.firstName = 'Conrad';
x.lastName = 'Mugisha';
x.sayHi = function() {
    console.log('Hi');
}

//console.log(x);
console.log( x.sayHi() );