/*
    findIndex() dapat melakukan pencarian berdasarkan kondisi yang diinginkan.

    Callback function pada findIndex() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:
    1. value, yaitu isi dari tiap elemen yang diproses
    2. index (optional) yaitu nomor index tiap elemen
    3. array (optional) array itu sendiri
*/ 

// Contoh penggunaan ketika melakukan pencarian data yang diawali huruf tertentu
let arrHewan = ["Kucing", "Burung", "Gajah", "Singa", "Jerapah"];
let index = arrHewan.findIndex((value) => {
    return value[0] === "B";
});
console.log(index)