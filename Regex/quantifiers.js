// Quantifiers digunakan untuk mengidentifikasi jumlah karakter;

/*
Karakter spesial yang sering digunakan dalam quantifiers sebagai berikut:
x*: karakter yang diikuti dengan * dibolehkan tidak tampil sama sekali atau boleh tampil satu kali dan seterusnya
x+: karakter yang diikuti dengan + harus minimal tampil 1 kali dan seterusnya
x?: karakter yang diikuti dengan ? sifatnya menjadi opsional, dibolehkan tidak tampil sama sekali atau hanya satu kali
x{n}: karakter yang diikuti dengan {n} (n adalah integer positif) dibolehkan sebanyak minimal n kali
x{n,}: karakter yang diikuti dengan {n,} (n adalah integer positif) dibolehkan minimal tampil n kali dan seterusnya
x{n,m}: karakter yang diikuti dengan {n,m} (n&m adalah integer positif dan m > n) dibolehkan minimal tampil n kali dan maksimal m kali

*/

// Contoh penggunaan x*
let regex = /roa*r/gi;
let word = "Ror";
console.log(word.match(regex)); // Output [ 'Ror' ]

word = "Roaaar";
console.log(word.match(regex)); // Output [ 'Roaaar' ]

word = "Roaaaaaar";
console.log(word.match(regex)); // Output [ 'Roaaaaaar' ]

// Contoh penggunaan x+
regex = /ro+ar/gi;
word = "Roaar";
console.log(word.match(regex)); // Output null

// Contoh penggunaan x?:
regex = /roa?r/gi;
word = "Ror";
console.log(word.match(regex)); // Output [ 'Ror' ]

word = "Roar";
console.log(word.match(regex)); // Output [ 'Roar' ]

word = "Roaaaaaar";
console.log(word.match(regex)); // Output [ 'Roar' ]
null

// Contoh penggunaan x{n}:
regex = /roa{3}/gi;
console.log(word.match(regex)); // Output [ 'Roaaa' ]

word = "Roaaaaaaaaaar";
console.log(word.match(regex)); // Output [ 'Roaaa' ]

// Contoh penggunaan x{n,}:
regex = /roa{1,}/gi;
word = "Roaaar";
console.log(word.match(regex)); // Output [ 'Roaaa' ]

word = "Roaaaaaar";
console.log(word.match(regex)); // Output [ 'Roaaaaaa' ]

word = "Ror";
console.log(word.match(regex)); // Output null

// Contoh penggunaan x{n,m}:
regex = /roa{1,2}/gi;
word = "Roaaar";
console.log(word.match(regex)); // Output [ 'Roaa' ]

