// Fungsi declaration
function jumlahDuaBilangan(a, b){
    var total = a + b;
    return total;
}

// Fungsi ekspression
var hasilBagi = function(a, b){
    return a / b;
}

function calculateVolumeSquare(s){
    return s*s*s;
}
function sumVolume(a, b){
    return (calculateVolumeSquare(a) + calculateVolumeSquare(b));
}

console.log("Hasil penjumlahan volume dua kubus: " + sumVolume(8,3));

function sum(){
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

console.log(sum(1,2,3,4,5));


// Fungsi rekursif
function cetakAngka(n){
    if(n === 0){
        return;
    }
    console.log(n);
    cetakAngka(n-1);
}
console.log("Fungsi Rekursif")
cetakAngka(10);

function factorial(n){
    if(n === 0){
        return 1
    }
    return n * factorial(n-1);

}
console.log(factorial(5));