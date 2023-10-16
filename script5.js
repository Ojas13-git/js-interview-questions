//Currying in JS
//Creating a function which expects another parameter 
//BLOG: https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

//Example f(a,b) int f(a)(b)

/*function f(a,b){
    console.log(a,b);
}*/

/*function f(a) {
    return function (b){
        return `${a} ${b}`;
    }
}

console.log(f(5)(6));*/

/****************************************** */

//Why do we use currying?
//to avoid passing same variable again and again
//to create HOFs
//to make your function pure and less prone to errors

/******************************************** */

//Q. sum(2)(6)(1)

/* function sum(a){
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(sum(2)(6)(1)); */

/********************************************** */

//Q. Infinite currying -> sum(1)(2)(3).....(n)
/*
function add(a){
    return function (b){
        if(b) return add(a+b);
        return a;
    };
}

console.log(add(5)(2)(4)(8)()); */


/******************************************* */

//Q. Currying vs partial application


//partial application : we have three args but we are returning two functions
/*function sum(a) {
    return function(b,c) {
        return a + b +c;
    };
}

const x = sum(10);
console.log(x(5,6));
console.log(x(3,2));

//or

console.log(sum(20)(1,4));*/



//currying : 3 functions 3 arguments
/*function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}*/

//Infinite currying
// q. add(5)(2)(4)(8)()()..

// function add(a){
//     return function(b){
//         if(b) return add(a+b);
//         return a;
//     }
// }

// console.log(add(5)(2)(4)(8)());
/********************************************* */

//Q. real world aplication of currying
//Manipulating DOM

/*function updateElementText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    }
}
 
const updateHeader = updateElementText("heading");
updateHeader("Hello Ojas");*/

/******************************************* */

//IMPORTANT
//Q. curry() implementation
/*
function curry(func) {
    return function curriedFunc(...args){
        if(args.length >= func.length){
            return func(...args);
        }else {
            return function(...next){
                return curriedFunc(...args, ...next);
            }
        }
    };
}

const sum = (a,b,c,d) => a+b+c+d;
const totalSum = curry(sum);

console.log(totalSum(1)(6)(5)(6));
*/



