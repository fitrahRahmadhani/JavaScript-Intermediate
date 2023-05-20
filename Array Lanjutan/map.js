/*
map digunakan untuk melakukan perulangan sambil melakukan pengecekan terhadap setiap elemen array, lalu akan memberikan nilai balik berupa array baru tanpa mengubah nilai pada array yang lama


Callback function pada map() memiliki 3 parameter dasar yang dapat digunakan sesuai kebutuhan
1. value yaitu isi dari tiap elemen yang diproses
2. index (optional) yaitu nomor index tiap elemen
3. array (optional) yaitu array itu sendiri 

*/ 

let input = [100,90,60,30,10];
let output  = input.map(item => item/10);
console.log(output);

