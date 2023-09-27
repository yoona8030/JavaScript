console.log('my'+'cat');
console.log('1'+2);
console.log("ellie's\n\tbook");

console.log(1+1); // add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multiply
console.log(5%2); //remainder
console.log(2**3); //exponentiation

let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement
console.log('preIncrement: {preIncrement}, counter: {counter}');
const postIncrement = counter++;
console.log('postIncrement: {postIncrement}, counter:{counter}');
//postIncrement = counter;
//counter = counter + 1;
const preDecrement = --counter;
console.log('preDecrement: {preDecrement}, counter: {counter}');
const postDecrement = counter--;
console.log('postDecrement: {preDecrement}, counter: {counter}');


let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

console.log(10<6); 
console.log(10<=6); 
console.log(10>6); 
console.log(10>=6); 

// || (or), &&(and), !(not)
const value = false;
const value2 = 4<2;

// || (or)
console.log('or: {value || value2 || check()}');

// && (and)
console.log('and: {value && value2 && check()}');

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('ㅠㅠ');
    }
    return true;
}
// ! (not)
console.log(!value);

const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive !== numberFive);

// == strict equality, no type conversion 
console.log(stringFive == numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {nqme: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 == ellie2);
console.log(ellie1 == ellie3);


// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log(''=== false);
console.log(null == undefined);
console.log(null === undefined);



// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon')
}