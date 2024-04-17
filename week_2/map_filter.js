const input = [1,2,3,4,5];

const newArray = [];
let em = 0;

for(let i=0; i<input.length; i++){
    em = input[i] * 2;
    input[i] = em;
}

console.log(input)


//other solution

function transform(i){
    return i*2;
}

const ans = input.map(transform);
console.log(ans);

//filter ---
//have to find all even numbers from array
const ini = [1,2,3,4,5];
const ana = ini.filter(function(i){
    // return i%2==0; another way below
    if(n%2==0){
        return true;
    }else{
        return false;
    }
})

console.log(ana);