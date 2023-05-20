/*
    filter() digunakan untuk menyaring data dengan kondisi tertentu pada suatu array.

    Callback function pada .filter() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:
    1. value yaitu isi dari tiap elemen yang diproses.
    2. index (optional) yaitu nomor index tiap elemen.
    3. array (optional) yaitu array itu sendiri.

*/ 

let arrayAngka = [1,2,3,4,5,6,7,8,9];
let filterArr = arrayAngka.filter((item) => {
    return item % 2 == 0;
});
console.log(filterArr);