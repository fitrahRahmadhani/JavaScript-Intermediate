/*
    reduce() digunakan untuk melakukan operaso pada array menjadi sebuah nilai baru atau membuah struktur data baru


    Callback function pada reduce() memiliki 5 parameter yang dapat digunakan sesuai kebutuhan:
    1. total, yaitu nilai awal (initial value) atau akumulasi dari perhitungan sebelumnya
    2. value, yaitu isi dari tiap elemen yang diproses
    3. index (optional) yaitu nomor index tiap elemen
    4. array (optional) yaitu array itu sendiri
    5. initialValue (optional) yaitu nilai awal yang akan di passed sebagai initiap value di poin 1

    Struktur kode dari reduce()
    arr.reduce((total, value, index, array) => {
            kode program
    }, initialValue);
*/ 

let arrayAngka = [1,2,3,4,5,6,7,8,9];
let hasilPenjumlahan = arrayAngka.reduce((total, value) => total + value );
console.log(hasilPenjumlahan);


// Bagaimana contoh kasus penggunaan initialValue?
let hasilInitialValue = arrayAngka.reduce((total, value) => {
    return total + value;
}, 5);
console.log(hasilInitialValue);
