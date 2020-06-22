const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Angka : ", function(angka) {
    oddEven(angka);
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

function oddEven(value){
    if(value % 2 == 0){
        console.log(`${value} adalah bilangan Genap`)
    }else{
        console.log(`${value} adalah bilangan Ganjil`)
    }
}