const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Grade : ", function(angka) {
    let value = grade(angka);
    console.log(value);
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});


function grade(angka){
    if(angka >= 90){
       return "A";
    }else if((angka >= 80) & (angka <= 89))
    {
        return 'B';
    }
    else if((angka >= 70) & (angka <= 79))
    {
        return 'C';
    }
    else if((angka >= 60) & (angka <= 69))
    {
        return 'D';
    }
    else if((angka <= 59 ))
    {
        return  'E';
    }
    else
    {
        return "Nilai diluar kategori";
    }
}