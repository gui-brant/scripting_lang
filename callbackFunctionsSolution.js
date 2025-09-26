let even_predicate = function (value)
{
    /* check whether the value is even 
     (a number is even when the remainder of its division by 2 is equal to 0)
     return true if the value is even or false when the value is odd 
   */
    let isEven = false;
    if (value%2===0){
        isEven = true;
    }
    return isEven;
};

let odd_predicate = function (value)
{
    /*
    check whether the value is odd 
     return true if the value is odd or false when the value is even
    */ 
    let isOdd = false;
    if (value%2!=0){
        isOdd = true;
    }
    return isOdd;
};

let undefined_predicate = function (value)
{
    /* 
        check and return a boolean value to indicate 
        whether the given value is undefined
         (be careful with the implicit coercion) 
    */
    let isUndefined = false;
    if (value === undefined){
        isUndefined =true; 
    }
    return isUndefined;
};

let null_predicate = function (value)
{
    /* 
        check and return a boolean value to indicate 
        whether the given value is null
         (be careful with the implicit coercion) 
    */
    let isNull = false;
    if (value === null){
        isNull =true; 
    }
    return isNull;
};


//We're defining a function that takes predicate function to 'callback' 
// and a value to check using the given predicate
let check = function (predicate,value)
{
    // apply the predicate to the value and return the result
    return predicate(value);
};

//DO NOT CHANGE ORDER OF OUTPUT
console.log(check(even_predicate, 9));
console.log(check(odd_predicate, 9));
console.log(check(even_predicate, 8));
console.log(check(odd_predicate, 8));
let x;
console.log(check(undefined_predicate, x));
console.log(check(null_predicate, x));
