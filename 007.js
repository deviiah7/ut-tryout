const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Kata / Kalimat : ", function(angka) {
    let value = reverse(angka);
    console.log(value);
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

function reverse(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}