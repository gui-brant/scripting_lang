/*
Lazy evaluation means that an expression is not computed until its value is needed. This is unlike eager evaluation, which is what regular JS does most of the time.
Here, expressions are stored, as if they were recipes, and computed if or when needed. Let's look at an example! :):

You see, JS doesn't have built-in lazy evaluation, but you can implement it. For instance, the following code does not have any sort of lazy evaluation:

function square(x) {
  console.log("Computing square of", x);
  return x * x;
}

let result = square(5);  // immediately computes
console.log("Result:", result);

Note that square(5) computes immediately regardlessof whether result is used, which it is.

Now, let's look at the lazy evaluation version of that: 

function lazySquare(x) {
  return () => {
    console.log("Computing square of", x);
    return x * x;
  };
}

let lazyResult = lazySquare(5);  // just creates a recipe, nothing computed yet
console.log("No computation so far!");

console.log("Now we need the result:", lazyResult());  
// Only now does it compute

Recall that arrow functions don't bind their own this. Instead, they capture the this from the surrouding scope.
They also take no parameters, so they this the this keyworkd of their surrouding scope for calculations, returns are implicit, and they can't be used as contructors.
It's a object-oriented trick in JS that helps to create a function that can adapt entirely to an object as its "surrounding scope." That way, you don't get the this mess (or other messy JS return, object declaration stuff). 

Back to the point of lazy evaluations. The lazy function returns the arrow function. That way, it's not returning the output of a function but a function itself. Therefore, the idea of the recipe continues.
You won't output a result value here yet. You'll simply create a recipe for it. To get your actual output, you have to run the variable in which you stored that result: console.log("Now we need the result:", lazyResult());

Now, the above functions highlight general lazy evaluation, which is not directly supported in JavaScript. What is supported in JavaScript is short-circuit evaluation, which is a type of lazy evaluation.
In this case, the runtime returns early because it's already figured out the answer. For example:
Say you have let x = 0 && true;. Here, both have to be truthy for x to be truthy. However, 0 evaluates to falsy, so the compiler doesn't even run the 'true' expression.
Skipping the true expression there is a sign of lazy evaluation. 
Likewise in ||, if one expression is truthy, it won't check the second.
Therefore, only 'hello' is checked here: let a = "hello" || true; // "hello" is truthy, so evaluation stops here → returns "hello"

This is key in efficient control flow. Logic is written wihtout expensive computation.
*/



/*
    Set the values of variables as explained in comments to get the correct value.

    The first statements are just examples to get used to setting variables. Use let
    to set a, b, e, f to the values indicated in the comments.

    Setting the remaining values is a puzzle for you. Non-boolean values in a logical expression 
    will be cast to boolean values. See class notes or experiment to see what evaluates as true.
*/

// AND short-circuit
let a = false; //set to false
let b = true; //set to true
let c = a && (console.log("This will NOT print")); // returns false
let d = b && (console.log("This will print")); // returns undefined

// OR short-circuit
let f = true; //set to true
let g = false; //set to false
let h = true || (console.log("This will NOT print")); // returns true
let i = false || (console.log("This will print")); // returns undefined

//set t so that v contains "hello"
//do not use true or false
let t = []; 
let u = "hello"; 
let v = t && u; //false and true, so it stores only the truthy value.

//set x and y so that z contains 0
//do not use true or false
let x = 0; 
let y = 0; 
let z = x || y; //sees x, or 0, that is falsy, so it moves onto the second variable. y is also 0 and falsy, so it has no option but to keep it.   

console.log(c); // false
console.log(d); // undefined (because console.log returns undefined)
console.log(h); // true
console.log(i); // undefined
console.log(v); // hello
console.log(z); // 0