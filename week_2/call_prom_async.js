//Callback
// setTimeout(function(){      //problem is callback hell, as we can see we are not able to identify
//     console.log("hi1");     //functions clearly and it gets confusing
//     setTimeout(function(){
//         console.log("hi2");
//         setTimeout(function(){
//             console.log("hi3")
//         },3000);
//     },2000);
// },1000);

// --------------------promisifying the above callback --------------------

function promisifiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve,reject){
        setTimeout(resolve,duration);//after duration seconds call resolve(which is function inside .then)
        console.log(duration);
    });
    return p;
}


const ans = promisifiedMyOwnSetTimeout(1000);
console.log(ans); //returns promise pending, i.e instance of the class
                  //to resolve this promise we have to give a .then

promisifiedMyOwnSetTimeout(1000).then(function(){       //promise chaining
    console.log("first is done");
    promisifiedMyOwnSetTimeout(2000).then(function(){
        console.log("second is done");
        promisifiedMyOwnSetTimeout(3000).then(function(){
            console.log("third is done");
        })
    })
})


async function main(){                        //makes it easier to understand promise chaining
    await promisifiedMyOwnSetTimeout(1000);
    console.log("first is done")
    await promisifiedMyOwnSetTimeout(2000);
    console.log("second is done")
    await promisifiedMyOwnSetTimeout(3000);
    console.log("third is done")
}

main();