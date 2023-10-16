//Functions in jS
//First class functions?

//Passing functions in another function just like variables 

/*function square(num){
    return num*num;
}

function displaySquare(fn) {
    console.log("Square is" + fn(5));
}

displaySquare(square);*/
/*********************************************************************** */

//What is IIFE : Immediately invoked function expression

/*(function square(num){
    console.log(num*num);
},(5))*/

/*********************************************************************** */

//Function Hoisting
//Functions are hoisted completely unlike vars
/*
functionName();
function functionName() {
    console.log("Ojas");
} */

/*********************************************************************** */
//Q.
/*
var x = 21;
var fun = function (){
    console.log(x);  //undefined because hoisting is a two step process x is initialized in global scope but it will again be hoisted in local scope where it will be undef
    var x = 20;
}

fun();*/

/*********************************************************************** */
//Arrow func vs Regular funcs
/*
// 1 - Syntax
function square (num) {
    return num * num;
}

const squareArrow = (num) => {
    return num * num;
};
    
// 2 - Implicit "return" keyword
const squareArr = (num) => num * num;

// 3 - arguments
function fn() {
    console.log(arguments);
}
    // fn(1, 3, 2) ;

const fnArr = () => {
    console.log(arguments);
}
    // fnArr (1, 3, 2);

// 4 - "this" keyword
let user = {
    username: "Roadside Coder",
    rc1: () => {
        console.log("Subscribe to " + this .username); //this here is pointing to global obj
    },
    rc2() {
    console. log("Subscribe to " + this. username); //this here is pointing to let user obj
    }
};
    user.rc1();
    user.rc2();

    */