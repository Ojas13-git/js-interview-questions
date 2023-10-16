//this keyword
//Explain
//
/*
this.a = 5; //global context

/*function getParams() {
    console.log(this.a);
} //Normal Function also this is global context 

const getParams = () => {
    console.log(this.a);
} //still global context 

getParams();
*/

/*********************************************** */
/*
let user = {
    name: "Ojax",
    age: 24,
    getDetails(){
        console.log(this.name); //this here points to user object
    },
    childObj: {
        newName: "Ojas P",
        getDetails() {
            console.log(this.newName, "and", this.name); //Ojas P and undefined this points to childObj and no name in it
        }
    },
    getDetailsAgain: () => {
        console.log(this.name); // no output in console in case of arrow function it points to window object 
    },

};
user.getDetailsAgain();
user.getDetails();
user.childObj.getDetails(); */

/************************************************** */
/*
let user = {
    name: "ojas",
    age: 24,
    getDetails() {
        const nestedArrow = () => console.log(this.name);//here value will be ojas as it take he value of this from its parent function and parent function getDetail takes it from user obj
        nestedArrow();
    }
}

user.getDetails();

*/

/************************************************ */
/*
class user{
    constructor(n) {
        this.name = n;
    }

    getName() {
        console.log(this.name);
    }
}

const User = new user("Ojas");

user.getName();
*/

/*********************************************** */
/*
const user = {
    firstName: "Ojas!",
    getName() {
        const firstName = "ojas Palorkar";
        return this.firstName;
    }
};
console.log(user.getName()); // Ojas!  this points to global object 

*/

/************************************************ */

/*
function makeUser() {
    return {
        name: "john",
        ref: this,
    }
}

let user = makeUser();// parent function is window function and no name in window

console.log(user.ref.user);// no ouput 

*/

//Fix above
/*
function makeUser() {
    return {
        name: "john",
        ref() {
            return this;
        },
    };
}

let user = makeUser();
console.log(user.ref().name);
*/
/******************************************************* */

/*
const user = {
    name: "Ojas Palorkar",
    logMessage() {
        console.log(this.name);
    },
};

setTimeout(user.logMessage, 1000); // undefined because use.logMEssage acts as a call back we can fix by 
setTimeout(function(){
    user.logMessage;
},1000);
*/

/************************************************** */

//calculator
/*
let calculator = {
    read(){
        this.a = +prompt("a = ", 0);
        this.b = +prompt("b = ", 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
    
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
*/
/*************************************************** */


const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(a){
        this.total *= a;
        return this;
    },
    subtract(a){
        this.total -= a;
        return this;
    },
};



//Q.
const result = calc.add(10).multiply(5).subtract(30).add(20);
console.log(result.total);