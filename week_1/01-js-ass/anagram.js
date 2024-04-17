/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) { //(BATA,BAAT)

  const l1 = str1.length; //4
  const l2 = str2.length; //4

  const stringSplit1 = str1.split("");//['B','A',"T","A"]-->C=0,A=1,T=2
  const stringSplit2 = str2.split("");//["B","A","B","T"]


  if (l1 == l2) {              //4==4.....True    

    for (let i = 0; i < l2; i++) {  //2

      if (stringSplit1.includes(stringSplit2[i])) { //["","",T,A].includes('B') ==>false
        let n = stringSplit1.indexOf(stringSplit2[i]); //["","",T,A].index('B'),,,n==1
        stringSplit1[n] = ""; // [B,A,T,A] --> ["","",T,A]
      } else {
        return console.log("Not a anagram") //he print honare
      }

    } //for ends

  } else {
    return console.log("Not a anagram")
  }
  return console.log("It is an anagram")
}

const res = isAnagram("BATA", "BABT");

module.exports = isAnagram;
