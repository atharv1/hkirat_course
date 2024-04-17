function papatsReadFile(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there!")
        },3000)
        });
    return p;
}

async function main(){
    const value = await papatsReadFile();
    console.log("Hola!");
}

main();
console.log("After main call")