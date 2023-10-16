//var vs let vs const
//Scope
//var is functional scope but let and const are blocked scope

//Variable Shadowing
/* function test() {
    let a = "hello";

    if(true) {
        let a = "Hi";
        console.log(a);
    }

    console.log(a);
}

test(); */

//Illegal Shadowing
//we cannot shadow let variable using var but can do vice versa

/*
function test() {
    var a = "hello";
    let b = "ojas"

    if(true) {
        let a = "Hi";
        var b = "pal"
        console.log(a);
        console.log(b);
    }

    console.log(a);
}

test(); */


//Hoisting

/* function abc() {
    console.log(a,b,c);

    let a= "a";// declared in temporal dead zone
    const b = "b"; // declared in temporal dead zone
    var c = 'c'; //declared but printed undef
}

abc(); */

// Temporal dead zone is term to describe the state where variables are in the scope but are not yet declared
// phase between initialization and declaration