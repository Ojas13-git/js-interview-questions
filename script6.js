//Objects in Javascript

/*const user = {
    name: "Hello Ojas",
    age: 24
}

user.name = "ojas p";
delete user.age;

console.log(user); */

/************************************** */
/*
const func = (function (a){
    delete a; //it is only used when we have to delete props from a object and not alocal variable 
    return a;  //return 5 a not affected
})(5);

console.log(func); */

/******************************************* */
/*
const user = {
    name: "Hello Ojas",
    age: 24,
    "like this video" : true
}
console.log(user["like this video"]);
delete user["like this video"];
console.log(user); 
*/

/********************************************* */

//how do you add dynamic key value to obj or iterate thru an object

/*const user = {
    name: "Hello Ojas",
    age: 24,
    "like this video" : true
};

for( key in user){
    console.log(user[key]);
}*/

/****************************************** */
/* 
const obj = {
    a: "one",
    b: "two",
    a: "three",
}

console.log(obj);*/

//obj with a first with last value three and b


//Q. Create a funnction multiplyByTwo(obj) that multiplies
//    all numeric property values of nums by 2

/*
let nums = {
    a: 100,
    b: 200,
    title: "My nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2;
        }
    }
}

console.log(nums);
*/

/********************************************* **********/

//Q. output?

/*
const a = {};
const b = {key: "b"};
const c = { key:"c"};

a[b] = 123;  //a["[object Object]"] = 123
a[c] = 456;  //a["[object Object]"] = 456

console.log(a[b]);
*/

/********************************************************** */

//Q. JSON.stringify vs JSON.parse

/*
const user = {
    name: "Ojas",
    age:  24,
}

const strObj = JSON.stringify(user); //Coverts the obj to string

console.log(JSON.parse(strObj)); //convert the string back to obj
*/
//WHere are these used?
//Storing data in local storage; key value
//
/********************************************* */

//Q. output?
/*
const user = { name: "Lydia", age: 21};
const admin = {admin: true, ...user};

console.log(admin); //spreads user over admin
*/

/************************************************* */

//Q.
/*
const settings = {
    username: "ojas",
    level: 19,
    health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data); //only stringify level and health
*/
/*********************************************** */

//Q. 
/*
const shape = {
    radius: 10,
    diameter() {
        return this.radius*2;
    },
    perimeter: () => 2*Math.PI * this.radius
};

console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NaN because in arrow function this points to the window object
*/
/**************************************************** */

//What is destructuring in objects?
/*
let user = {
    name: "Ojas",
    age: 20,
    fullName: {
        first: "Piyush",
        last: "Agrawal"
    },
};

const name = "Ojas P";

const {
    fullName: {first},
} = user;

console.log(first);
*/

// const {name: myName}  = user;

// console.log(myName);

/******************************************** */
/*

let c = {greeting:  'Hey!'};
let d;

d = c;
c.greeting = "HELLO";
console.log(d.greeting); //HELLO becoz we provide ref of the obj when d=c so if we change anything in d or c it will affect both the objects
*/
/********************************************** */

/*
let person = {name: "Lydia"};
const members = [person];
// person = null;
person.name =null;

console.log(members); //if person =null, will not log null since we are modifying the complete var boj but not props inside it but if
// person.name = null, it will log null
*/
/********************************************* */

// console.log({a:1} == {a:1}); //false
// console.log({a:1} === {a:1}); //false

//both are different objects with different addresses
/************************************** */

/*
let person = {name: "ludia"};
const members = [person]; //here we are providing members to array's 0th index so the value will not affect
person = null;

console.log(members); //{name: ludia}

//if person.name = null; //it will affect */
/************************************ */
/*
const value = {number: 10};

const multiply  = (x = {...value}) => { //clone object value
    console.log((x.number *= 2));
};

multiply();//20
multiply();//20
multiply(value);//20
multiply(value);//40

*/
/************************************************ */


//What is shallow copy and deep copy?
//How to deep copy an object?
 /*
let user = {
    name: "OJAS P",
    age: 24,
}

//const objClone = Object.assign({}, user);
//const objClone = JSON.parse(JSON.stringify(user));
const objClone = {...user};

objClone.name = "OjasTheGod";

console.log(user, objClone);
console.log(user, objClone);

*/