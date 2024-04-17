class Calculator{
    constructor(result,value){
        this.result=result;
        this.value=value;
    }
    add(num){
        this.result += num;
    }
    subtract(num){
        this.result -= num;
    }
    multiply(num){
        this.result *= num;
    }
    divide(num){
        this.result /= num;
    }
    clear(){
        this.result = 0;
    }
    getResult(){
        console.log(this.result);
    }
    calculate(){
        let l = value.length;
        for(let i=0; i<l; i++){
            if(!isNaN(value(i))){

                if(value(i) == '+'){
                    value
                    add()
                 }else if(value(i) == '-'){
                    sub()
                }else if(value(i) == '*'){
                    multiply()
                }else if(value(i) == '/'){
                    divide()
                }else{
                    let num = parseInt(value(i));
                }

            }else{
                return console.log("error");
            }
        }
    }
}


let input = '10 +    2+     (  6  - (4+1) - 2) + 7'
let val = input.replace(/ /g,"");
console.log(val);

let con = new Calculator(0,val);

con.calculate();
con.getResult();
