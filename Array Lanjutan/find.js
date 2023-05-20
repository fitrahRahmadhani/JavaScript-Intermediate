/*
    find() memberikan nilai balik berupa nilai tunggal (single value) dari element pertama yang ditemukan jika memenuhi suatu kondisi pada return statement.

    Callback funtion pada find() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan
    1. value yaitu isi tiap elemen yang diproses
    2. index (opsional) yaitu nomor index tiap elemen
    3. array (optional) yaitu array itu sendiri


    filter() mengembalikan hasil dalam bentuk array, sedangkan find() mengembalikan hasil single value
*/ 

let people = [
    {
        name: 'Jane',
        age: 20
    },
    {
        name: 'Doni',
        age: 21
    }
];
let janeFind = people.find(item => item.name === "Jane");
let janeFilter = people.filter(item => item.name === "Jane");

console.log(janeFind);
console.log(janeFilter);
