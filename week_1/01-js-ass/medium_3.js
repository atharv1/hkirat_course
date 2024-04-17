function calculateTime(n){
    const beforeDate = new Date();
    let t1 = (beforeDate.getTime())/1000;
    console.log(t1);

    let sum =0;
    for(let i=1;i<=n;i++){
        sum = sum+i;
    }
    const afterDate = new Date();
    let t2 = (afterDate.getTime())/1000;
    console.log(t2);

    return t2-t1;
}

let ans = calculateTime(1000000000);
console.log(ans + " seconds");