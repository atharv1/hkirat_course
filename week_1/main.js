//1.3 js refresher

//-------------------------------------------string manipulation------------------------------------

let naam = "atharv papat";
let len = naam.length;
console.log(len);

//index of 
console.log(naam.indexOf("papat"))

//slice of string
console.log(naam.slice(3,5));

//substring -- depriciated
//naamsubstr(2,5).....here starts from index 2 but next 5 letters used

//replace the words
const str = "hello world";
console.log(str.replace("world","javascript"));

//split - split your string based on delimeter
const value = "hi my name is atharv"
const words = value.split("h");
console.log(words);

//trim() -- remove spaces
const val = "    heyyy im atharv    ";
console.log(val.trim())

//toUpperCase()
console.log(val.toUpperCase())

//toLowerCase()

//parseInt -- parse from string to integer
console.log(parseInt("42"))
console.log(parseInt("43sdhajsd"))
console.log(typeof(parseInt("44px")));

//parseFloat -- same as parseInt but converts value to float (keeps decimal)
console.log(parseFloat("3.14"))

//-----------------------------------array manipulation-------------------------------------

//push (adds element at end)
const initialArray = [1,2,3];
initialArray.push(4);
console.log(initialArray)
//pop the last element
console.log(initialArray.pop());
console.log(initialArray);

//shift -- pop from front
initialArray.shift();
console.log(initialArray);

//unshift -- push from front
initialArray.unshift(11);
console.log(initialArray);

//concat -- if we have 2 arrays and want to merge them together
const iniArray = [1,2,3];
const secondArray = [4,5,6];
console.log(iniArray.concat(secondArray));

//forEach -- go through all elements
//for every element in that array call the function........forEach acts as callback function
function logThis(str){
    console.log(str);
}
iniArray.forEach(logThis)

//callback function -- call another function from a function 
function log1(){
    console.log("Hello world")
}
function logWhatsPresent(fn){
    fn();
}
logWhatsPresent(log1);


//-------------------------------------------Classes-------------------------------------------
//They let you put bunch of properties together
class Animal{
    constructor(name, legCount, speaks){ //properties
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak(){                            //functions in class
        console.log("hi there " + this.speaks)
    }
    static myType(){                 //static function -- multiple animals in world, 
        console.log("Animal");
    }
}

Animal.myType()   //calling the static method of animal, it does need us to call/ create object of class
                  //static method can be called without instantiating the objects
let dog = new Animal("dog", 4, "Bhow bhow");     //calling a class
let cat = new Animal("cat", 4, "meow meow");
cat.speak();    //call function on object


//Date class in Javascript --premade class......is used to calculate how much time it takes for a certain function to run, or as counter
const currentDate = new Date();
console.log(currentDate.getMonth()+1); //0 indexed so we do +1
console.log(currentDate.getFullYear());
console.log(currentDate.getTime());//we get total milliseconds elapsed from 1977

//using date
function calculateSum(){
    let a =0;
    for(let i=0; i<10000000; i++){
        a=a+i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime()
calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log("Time taken = " + (afterTimeInMs - beforeTimeInMs) + " sec")


//json  -- you will need to interchange between js obj and js string for this we need json
// It gives us 2 functions -- JSON.parse & JSON.stringify
const users = '{"name": "harkirat","age":21, "gender":"male"}'

const user = JSON.parse(users);
console.log(user["gender"]);


const user2 = {
    name:"Atharv",
    gender:"male"
}
const finalString = JSON.stringify(user2)  // converts object into string
console.log(finalString)
console.log(finalString["name"]) // cant do this will print undefined, can do user2["name"] - directly for object
//when we want to send data we have to convert it in string as everyone can understand string

//----------------------------------------MATH functions ------------------------------------------

Math.random()   // random no. between 0 and 1
console.log(Math.floor(2.3));
Math.ceil(2.3);
console.log(Math.max(2,3,6,4));
Math.min(4,6,5);
Math.pow(value,2);
Math.sqrt(value);
Math.round(value);


//------------------------------------------Object Methods----------------------------------------
const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4"
};
console.log(Object.keys(sampleObject)); //can be done directly as this .... OR --

objectMethods(sampleObject);

function objectMethods(obj){
    console.log("Original Object: ",obj);

    let keys = Object.keys(obj);
    console.log("After Object.keys(): " + keys)

    let values = Object.values(obj);
    console.log("After Object.values(): " +values);

    let entries = Object.entries(obj);
    console.log("After Object.entries: " +entries);

    let hasProp = obj.hasOwnProperty("key1");  //true or false value, we have key1 property so true
    console.log("After Object.hasOwnProperty(): " +hasProp)

    let newObj = Object.assign({}, obj, {newProperty: "newValue"}); //add new prperty to original object obj
    console.log("After obj.assign(): " + Object.entries(newObj))
}
