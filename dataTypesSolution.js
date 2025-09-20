/*
JavaScript may have undefined varaibles or undeclared variables.
If a variable is undefined, it means that the variable is defined, but it's not been assigned yet.
If a variable is undeclared that means it's not been declared or defined in the code. It results in a ReferenceError.

JavaScript may have a defined variable that equals undefined or null.
null variables are intentionally without any object value in them. That has to be explicitly assigned as null by the dev.
undefined represents the absence of a value. This does not have to be explicitly defined by the dev and is the default value of a variable that has been declared but not initialized.

Interestingly, null == undefined is a true statement. Of course, null === undefined is not.
It's a special thing in JS. They are considered equivalent in absence by the language.
Again, the role of == is an abstract equality that coerces types before comparing. Note that "type coercion" means that JavaScript turns different types into the same thing, so Number/string: "2" == 2 → JS converts "2" to number 2 → true, but true === 1 → false.
*/

//remember that strings go in quotes
let ageString = "17"; //set age to "17"

//lets try again as a number
let age = 17; //set age to 17

//use a comparison (< or >) to determine if age is at least 18
//note the variable type
let isAdult = age >=18;
//change the following line (if necessary) so "something" is undefined
let something;

//change the following line (if necessary) so "nothing" is null
//note the type!
let nothing = null;


console.log(ageString); // 17
console.log(typeof ageString); // string

console.log(age); // 17
console.log(typeof age); // number

console.log(isAdult); // false
console.log(typeof isAdult); // boolean

console.log(something); // undefined
console.log(typeof something); // undefined

console.log(nothing); // null
console.log(typeof nothing); // object