function isPalindrome(str){
    let strSplit = str.split("");
    let reverseStr = strSplit.reverse();
    let joinstr = reverseStr.join("");
    if(str == joinstr){
        return true;
    }else{
        return false;
    }
}
let ans = isPalindrome("radar");
console.log(ans);