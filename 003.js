
var angka = [2,10,36,1,9,40,6,9];
var value   = angka[0];
var total=0;

min(angka)
max(angka)
average(angka)

function min(angka){
    for (i=1; i < angka.length; i++) {
        if (angka[i] < value) {
            value = angka[i];
        }
    }
    console.log(`Nilai minimum adalah: ${value}`); // output nilai minimal 1
}

function max(angka) {
    for (i=1; i < angka.length; i++) {
        if (angka[i] > value) {
            value = angka[i];
        }
    }
    console.log(`Nilai maksimum adalah: ${value}`); // output nilai minimal 1
}

function average(angka) {
    for (i=0; i < angka.length; i++) {
        total = total + angka[i];
    }
    rata= Math.round(total / angka.length, 2);
    
    console.log(`Total nilai adalah ${total} dan rata-ratanya adalah ${rata}`);
}