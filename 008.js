const readline = require('readline');

function funcSum(total, num) {
    return total + num;
  }
function replInputer() {
    const bank = [];
    return new Promise(function (resolve, reject) {
        let rl = readline.createInterface(process.stdin, process.stdout)
        rl.setPrompt('innput value> ')
        rl.prompt();
        rl.on('line', function (line) {
            if (line === "=") {
                rl.close()
                return // bail here, so rl.prompt() isn't called again
            }

            if(Number.isInteger(parseInt(line))) {
                bank.push(parseInt(line))
            }else{
                console.log("Inputan tidak valid")
            }
            rl.prompt()

        }).on('close', function () {
            const finalResult = bank.reduce(funcSum);
            console.log('Total Nilai : ' + finalResult)
            resolve(42) // this is the final result of the function
        });
    })
}

async function run() {
    try {
        let replResult = await replInputer()
        console.log('repl result:', replResult)

    } catch (e) {
        console.log('failed:', e)
    }
}

run()