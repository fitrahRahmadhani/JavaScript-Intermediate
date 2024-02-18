const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Filter, ex. mencari angka lebih dari 3
const newAngka = angka.filter((e) => {
    return e > 3;
});
console.log(newAngka);

// Map, ex. mengalikan semua elemen dengan 2
const kali = angka.map((e) => {
    return e * 2;
})
console.log(kali);

// Reduce, ex. mengalikan semua elemen dengan 2
const jumlah = angka.reduce((accumulator, curentvalue) =>{
    return accumulator + curentvalue;
});
console.log(jumlah);

// Method Chaining
// Cari angka > 5
// Kalikan 3
// Jumlahkan

const hasil = angka.filter(e => e > 5).map(e => e * 3).reduce((acc,cur) => acc + cur);
console.log(hasil);