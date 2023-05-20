/*
    lastIndexOf() melakukan iterasi elemen array dari kanan ke kiri kemudian memberikan nilai balik berupa nomor index dari elemen yang dicari atau mengembalikan -1 jika tidak ditemukan.

    lastIndexOf() memiliki 2 argumen yang dapat digunakan sesuai kebutuhan:
    1. value yaitu nilai elemen pada array yang ingin dicari
    2. startIndex (optional) yaitu titik awal pencarian
*/ 
let arrBuah = ["Pisang", "Apel", "Semangka", "Apel"];
let indexPisang = arrBuah.lastIndexOf("Pisang");
console.log(indexPisang);