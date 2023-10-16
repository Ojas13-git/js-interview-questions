//Promises in JS
//synchronous vs Asynchronous Code

/*

//Sync
console.log("start");
console.log("Subscibe to Roadside Coder");
console.log("finish");

//Async
console.log("start");
setTimeout(()=> {
    console.log("Subscibe to Roadside Coder");
},1000)

console.log("finish"); 

//JS executes sync code first then asynchronous code

*/

/********************************************************* */


//Callbacks
/*
console.log("start");

function importantAction(username) {
    setTimeout(() => {
        return `Subscibe to ${username}`;
    },1000)
}

const message = importantAction("RoadSide Coder");

console.log(message);

console.log("stop");
*/

//O/P : start undefined stop


//How to get message instead of undefined
/*
console.log("start");

function importantAction(username, cb) {
    setTimeout(() => {
        cb(`Subscibe to ${username}`);
    },1000)
}

const message = importantAction("RoadSide Coder", function(message){
    console.log(message);
});


console.log("stop");
*/

/****************** ******************************/


//Callback Hell

/*
console.log("start");

function importantAction(username, cb) {
    setTimeout(() => {
        cb(`Subscibe to ${username}`);
    },0)
}
function likeTheVideo(video, cb) {
    setTimeout(() => {
        cb(`Like the ${video} video`);
    },1000)
}

function shareTheVideo(video, cb) {
    setTimeout(() => {
        cb(`Share the ${video} video`);
    },1000)
}

const message = importantAction("RoadSide Coder", function(message){
    console.log(message);
    likeTheVideo("Javascript Interview ques", (action)=> {
        console.log(action);
        shareTheVideo("Javascript Interview ques", (action) => {
            console.log(action);
        })
    })
});


console.log("stop");

*/

//nesting of callback functions while working in a coimpany or production code code will look messy

/*************************************************** */

//Solution: Promises
/*
console.log("start");

const sub = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        const result = true;
        if(result) resolve("Subscribed to Roadside Coder");
        else reject(new Error("Why not SUbscribed?"));
    },2000);
});

sub.then((res) => {
    console.log(res);
})
.catch ((err)=> {
    console.log(err);
});

console.log("stop");
*/

/***************************************************** */

//Promises in last example to remove callback hell

// console.log("start");

// function importantAction(username) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve(`Subscribe to ${username}`);
//         }, 1000);
//     });
// }

// function likeThisVideo(video){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             resolve("Like this ${video} video");
//         },1000)
//     });
// }

// function shareThisVideo(video){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             resolve("share this ${video} video");
//         },1000)
//     });
// }

// importantAction("Roadside Coder")
//     .then((res)=> {
//         console.log(res);
//         likeThisVideo("JavaScript Interview ques").then((res)=> {
//             console.log(res);
//             shareThisVideo("Javasript Interview Ques").then((res)=> {
//                 console.log(res);
//             })            
//         })
//     })
//     .catch((err) => console.error(err));


// console.log("stop");

//Still here it is promises HELL we have moew than one approaches 

/********************************************************* */


//Promises Chaining much good code IMP FOR INTERVIEW
// console.log("start");

// function importantAction(username) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve(`Subscribe to ${username}`);
//         }, 1000);
//     });
// }

// function likeThisVideo(video){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             resolve("Like this ${video} video");
//         },1000)
//     });
// }

// function shareThisVideo(video){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             resolve("share this ${video} video");
//         },1000)
//     });
// }

// importantAction("Roadside Coder")
//     .then((res)=> {
//         console.log(res);
//         return likeThisVideo("Javascript Interview questions");
//     })
//     .then((res)=> {
//         console.log(res);
//         return shareThisVideo("JavaScript Interview Questions");
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => console.error(err));


// console.log("stop");

/*********************************************** */

//Another Approach to promise.all() run all promises in parallel in the end return array with all of the fulfilled promises but if one of the promises failed it will fail all of the promise.all

// console.log("start");

// function importantAction(username) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve(`Subscribe to ${username}`);
//         }, 1000);
//     });
// }

// function likeThisVideo(video){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             resolve("Like this ${video} video");
//         },1000)
//     });
// }

// function shareThisVideo(video){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             resolve("share this ${video} video");
//         },1000)
//     });
// }

// Promise.all([
//     importantAction("Roadside Coder"),
//     likeThisVideo("Javascript interview ques"),
//     shareThisVideo("Javascript interview ques"),
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err) => {
//     console.error("Error: Promises Failed", err);
// })


// console.log("end");

/********************************************************************* */

//Promise.race  returns the promise that fulfills first

// console.log("start");

// function importantAction(username) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve(`Subscribe to ${username}`);
//         }, 1000);
//     });
// }

// function likeThisVideo(video){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             resolve("Like this ${video} video");
//         },1000)
//     });
// }

// function shareThisVideo(video){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             resolve("share this ${video} video");
//         },1000)
//     });
// }

// Promise.race([
//     importantAction("Roadside Coder"),
//     likeThisVideo("Javascript interview ques"),
//     shareThisVideo("Javascript interview ques"),
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err) => {
//     console.error("Error: Promises Failed", err);
// })


// console.log("end");

/****************************************************************** */

//Promise.allSettlled return failed as wrell as fulfilled promises
//Promise.any returns only the first fulfilled promise and ignoring rejected and gives error only when all promises fail

/************************************************************** */

//Async and await

console.log("start");

function importantAction(username) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        }, 1000);
    });
}

function likeThisVideo(video){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve("Like this ${video} video");
        },1000)
    });
}

function shareThisVideo(video){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            resolve("share this ${video} video");
        },1000)
    });
}

const result = async () => {
    try {
        const message1 = await importantAction('RoadSide Coder');
        console.log(message1);
        const message2 = await likeThisVideo("Javascript I Q");
        console.log(message2);
        const message3 = await shareThisVideo("Javascript I Q");
        console.log(message3);

    } catch(error)
    {
        error("Promises failed", error);
    }
};

result();

console.log("end");

// examples do and polyfills 37.05
