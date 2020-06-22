const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Kata / kalimat : ", function (value) {
    if(palindrome(value)){
        console.log(`TRUE ${value} adalah polindrome`)
    }else{
        console.log(`FALSE ${value} adalah bukan polindrome`)
    }
});

rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}