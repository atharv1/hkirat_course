/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

    const l1 = str1.length; //-->3
    const l2 = str2.length; //-->3
    
    const stringSplit1 = str1.split(""); // [C,A,T]
    const stringSplit2 = str2.split("");  // 
  
    // stringSplit1[0]="";
    // console.log(stringSplit1);
  
    const isAnagram = "";
  
    if(l1 == l2){                       // true
      for(let i=0; i<l2; i++){           //2
        if (stringSplit1.includes(stringSplit2[i])) { // stringSPlit2[0] --> D
          let n = stringSplit1.indexOf(stringSplit2[i]);
          stringSplit1[n] = "";
        }else {
         return console.log("Not a anagram")
        }
      }
    }else{
      return console.log("Not a anagram")
    }
    return console.log("It is an anagram")
  }
  
  const res = isAnagram("CAT","CAT");
  
  module.exports = isAnagram;
  