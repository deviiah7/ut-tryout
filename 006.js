const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Angka : ", function(angka) {
    let value = faktorial(angka);
    console.log(value);
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

function faktorial(n=1) {
	if (n==1) {
		return 1;
	} else {
		return n * faktorial (n-1);
	}
}