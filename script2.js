//map filer and reduce

//What is map()
// used to create a new array using all the elements in the existing array using a function

/*const nums= [1,2,3,4];

const multiplyThree = nums.map((num, i, arr) => {
    return num*3 + i;
})

console.log(multiplyThree);*/
 
/**************************************** */

//What is filter()?
//returns that elemets in the array which satisfy the condition

/*const nums= [1,2,3,4];

const moreThanTwo = nums.filter((num)=> {
    return num>2;
})
console.log(moreThanTwo);*/


/**************************************** */

//What is reduce() ?

/*const nums= [1,2,3,4];
const sum = nums.reduce((acc,curr,i,arr) => {
    return acc+curr;
}, 0);

console.log(sum);*/

/******************************************* */


//Polyfill for map()
//Array.map((num,i,arr)=>{ })

/*Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i =0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }

    return temp;
};

const nums= [1,2,3,4];

const multiplyThree = nums.myMap((num, i, arr) => {
    return num*3;
})

console.log(multiplyThree); */


/*********************************************** */

//Polyfill for filter() 

/*Array.prototype.myFilter = function(cb) {
    let temp =[];
    for(let i =0;i<this.length; i++){
        if(cb(this[i],i,this)) temp.push(this[i]);
    }

    return temp;
}

const nums= [1,2,3,4];

const moreThanTwo = nums.myFilter((num)=> {
    return num>2;
})
console.log(moreThanTwo);*/


/****************************************************** */

//Polyfill for reduce()
//arr.reduce((acc,curr,i,arr)=> {}, initialValue)

/*Array.prototype.myReduce = function(cb, initialValue){
    var accumulator =  initialValue;

    for(let i =0; i<this.length;i++){
        accumulator = accumulator? cb(accumulator, this[i], i ,this) : this[i];
    }

    return accumulator;
}
const nums= [1,2,3,4];
const sum = nums.myReduce((acc,curr,i,arr) => {
    return acc+curr;
}, 0);

console.log(sum); */

/************************************************ */

//Map vs forEach

/*const arr = [2,3,4,5];

const mapResult = arr.map((ar) => {
    return ar +2;
})

const forEachResult = arr.forEach((arr) => {
    return ar +2;
})

console.log(mapResult, forEachResult);*/

//Map returns a changed array but forEach doesnot returns but changes
//You cannot chain stuff on forEach as it does not returns an array 
// EG: const mapResult = arr.map((ar) => {
//        return ar +2;
//    }).filter()
/*************************************************** */

//Interview ques from the video endingsss   


//1. Return only names of students who scored more than 60
/*
let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
]

const names = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);

console.log(names);
*/

/********************************************************** */
 //2. return total marks for students with marks greater than 60 after 20 marks
 // have been added to those scored less than  60


 /*
 let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
]

const totalMarks = students.map((stu) => {
    if(stu.marks < 60) {
        stu.marks += 20;
    }

    return stu;
})
.filter((stu) => stu.marks > 60)
.reduce((acc,curr) => acc + curr.marks, 0);

console.log(totalMarks);
*/

