function findSum(n){
    let ans =0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSUmTill100(){
    console.log(findSum(100));
}

setTimeout(findSUmTill100,1000);
console.log("Hello World");

//setTimout sychronously -- 
//busy waiting
let a;
function syncSleep(){
    for(let i=0; i< 1000000000; i++){
        a++;
    }
}
syncSleep();    //the loop will take some time then hello world gets called
console.log("hello world");