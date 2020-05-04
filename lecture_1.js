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
x.child = {
    "one": "value 1",
    "two": "value 2"
}

//console.log(x);
//console.log( x.sayHi() );
//console.log(x.firstName);

//deepCopy object
function deepCopy(obj) {
    const keys = Object.keys(obj)
    const newObject = {}

    for(let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if( typeof obj[ key] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }

    return newObject
}

const obj = deepCopy(x)
console.log(obj)