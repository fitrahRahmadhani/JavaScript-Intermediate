/*
    indexOf() digunakan untuk melakukan iterasi elemen array dari kiri ke kanan kemudian memberikan valur nilai balik berupa nomor index dari elemen yang dicari atau mengembalikan -1 jika tidak ditemukan
    
    indexOf() memiliki 2 argumen pada callback function yang digunakan sesuai kebutuhan:
    1. value, nilai elemen pada array yang ingin dicari
    2. starIndex (optional) yaitu titik awal pencarian
*/ 

let arrBuah = ["Jeruk", "Apel", "Semangka", "Apel"];
let indexApel = arrBuah.indexOf("Apel");
console.log(indexApel);

// Bagaimana jika ingin mengambil nilai setelah index tertentu?
let indexApelBerikutnya = arrBuah.indexOf("Apel", 2);
console.log(indexApelBerikutnya);