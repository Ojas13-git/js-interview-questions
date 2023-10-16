//call, bind and apply in JS (Explicit binding)
//Q1. What is call?

/*

var obj ={name: "Piyush"};

function sayHello(age){
    return "Hello" + this.name + "is" + age;
}

console.log(sayHello.call(obj, 24)); //without .call the this will point to window object and will not print name and you can also pass other arguments

*/

/********************************************************/

//What is apply?
/*

var obj ={name: "Piyush"};

function sayHello(age, profession){
    return "Hello" + this.name + "is" + age + "and is an" + profession;
}

console.log(sayHello.apply(obj, [24, "Software Dev"])); //same as call but takes the other args as array

*/

/**************************************************** */

//what is bind?
/*

var obj ={name: "Piyush"};

function sayHello(age, profession){
    return "Hello" + this.name + "is" + age + " and is an" + profession;
}

const bindFunc = sayHello.bind(obj); //bind gives a resusable function

console.log(bindFunc(24, "Software Engineer"));
console.log(bindFunc(69, "Youtuber"));


*/
/****************************************************** */

//Output based Ques: https://roadsidecoder.hashnode.dev/javascript-interview-questions-call-bind-and-apply-polyfills-output-based-explicit-binding


//See polyfills for call bind apply for good interviews

