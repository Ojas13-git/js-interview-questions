// Closures in JS
// Lexical Scope
//A var defined outside a function can be accessible inside of another function defined after a variable declaration but not vice versa

/* var username = "RoadsideCoder";
 
//global scope
function local() {
    //local scope
    console.log(username);
}

local();*/

/***************************************************** */

/*function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();*/

/*************************************************** */
/*
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20 */

/******************************************************** */

//Q. Time optimisation using closures

/*function find(index) {
    let a = [];
    for(let i = 0;i<1000000;i++){
        a[i] = i*i;
    }

    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12");
*/


// ANS
/*function find(index) {
    let a = [];
    for(let i = 0;i<1000000;i++){
        a[i] = i*i;
    }

    return function (index) {
        console.log(a[index]);
    }
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");
*/


/************************************************************** */

//setTimeout Block scope with closures video
//Creating a private counter with closures
function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "Counter = + _counter";
  }

  return {
    add,retrieve,
  };
}

const c = counter();
c.add(5);

/*************************************************************** */

//Q. What is a module pattern?
/*var Module = (function(){
    function privateMethod(){
        console.log("private");
    }

    return {
        publicMethod: function() {
            console.log("public");
        }
    };
})();


Module.publicMethod();
Module.privateMethod(); */

/********************************************************** */

//Q. make this run only once from video
//Q. polyfill for once

//Q. MEmoise and caching video 


//Q. diff between closure and scope
//ans: closure is when a function is madde inside another function and inner fuction is the closure and outer function can be used at a later time
//scope is about vars what vars u have acccess to in  global or local or func scope


// https://roadsidecoder.hashnode.dev/closures-javascript-interview-questions
