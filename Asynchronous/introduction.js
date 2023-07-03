/*
Ada dua cara jika ingin menerapkan asynchronous pada JavaScript:

1. setTimeout(function, milisecond), digunakan untuk simulasi pemanggilan kembali proses asynchronous yang sedang atau sudah selesai dijalankan. Pemanggilan hanya dilakukan 1 kali

2. setInterval(function, milisecond), digunakan untuk simulasi pemanggilan proses asynchronous yang sedang atau sudah dijalankan dalam interval tertentu. Pemanggilan dilakukan berkali-kali sesuai interval waktu yang ditentukan
*/ 

// Contoh asynchronous menggunakan setTimeout()
setTimeout(() => {
    console.log("Cuci baju"); // blok kode asynchronous
}, 1000);
console.log("Menyapu");
console.log("Mengepel");
console.log("Memasak");
console.log("Mencuci");

// Contoh asynchronous menggunakan setInterval()
setInterval(() => {
    console.log("Cuci Baju bosku"); // blok kode asynchronous
}, 3000)
console.log("Menyapu");
console.log("Mengepel");
console.log("Memasak");
console.log("Mencuci");