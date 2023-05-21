/*
    includes() digunakan untuk memeriksa apakah terdapat salah satu data yang kita inginkan dalam array yang kita terima
*/ 

let foods = ["Siomay", "Dimsum", "Gyoza", "Pangsit"];

let isThereDimsum = foods.includes("Dimsum");
let isThereGG = foods.includes("Gedang Goreng");

console.log(isThereDimsum);
console.log(isThereGG);