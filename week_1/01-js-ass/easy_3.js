function findLargestElement(numbers){
    let max = Number.NEGATIVE_INFINITY;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>max){
            max = numbers[i];
        }
    }
    return max;
}
let num = [3,7,22,9,2];
let ans = findLargestElement(num);
console.log(ans);