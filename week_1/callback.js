//Normal way where we can call one function from another function
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}

function quad(n){
    return n*n*n*n;
}

// function sumofSquares(a,b){     //problem is DRY being violated
//     const val1 = square(a);     //same
//     const val2 = square(b);     //as below

//     return val1 + val2;
// }

// function sumofCubes(a,b){
//     const val1 = cube(a);       //this
//     const val2 = cube(b);       //(we are repeating ourself)

//     return val1 + val2;
// }

// function sumofQuad(a,b){
//     const val1= quad(a);
//     const val2 = quad(b);

//     return val1+val2;
// }

// console.log(sumofCubes(1,2));
// console.log(sumofSquares(1,2));

//------------------we use callback to solve this repitation--------------------

function sumOfSomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);

    return val1+val2;
}

console.log(sumOfSomething(1,2,square));
console.log(sumOfSomething(1,2,cube));
console.log(sumOfSomething(1,2,quad));


// ananymous functions -- functions which we wanna use only once.

//eg - 
let ans = sumofSomething(1,2, function(n){
    return n * n *n;
})
console.log(ans);