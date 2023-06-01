// Assertion digunakan untuk mencocokan karakter yang terdapat dalam suatu kata/kalimat

/*
    Karakter spesial yang digunakan:
    ^: digunakan untuk mencocokkan karakter pertama dari suatu string
    $: digunakan untuk mencocokkan akhir dari suatu string
    \b: digunakan untuk memberikan batasan suatu string. Huruf karakter sesudah karakter spesial ini harus tidak diikuti oleh huruf karakter lain.
    x(?=y) (lookahead): hasilnya akan berupa 'x' hanya jika setelah 'x' diikuti oleh 'y' tanpa spasi.
    (?<=y)x (lookbehind): hasilnya akan berupa 'x' hanya jika sebelum 'x' diikuti oleh 'y' tanpa spasi.
*/ 

// Contoh menggunakan karakter spesial ^
let regex = /^I/g;
word = "Indonesia";
console.log(word.match(regex));

regex = /^i/g;
console.log(word.match(regex));

// Contoh menggunakan karakter spesial $
regex = /a$/g;
console.log(word.match(regex));

regex = /A$/g;
console.log(word.match(regex));

// Contoh menggunakan karakter spesial \b
regex = /ee\b/gi;
word = "Tree";
console.log(word.match(regex));
// Contoh di atas akan menghasilkan array ['ee'] karena tidak ada lagi huruf setelah kata ee.

regex = /oo\b/gi;
word = "Moon";
console.log(word.match(regex)); 
// Kode di atas akan menghasilkan null karena masih ada huruf n dalam kalimat Moon.

// Contoh penggunaan x(?=y) (lookahead):
regex = /Moon(?=Child)/
word = "MoonChild"
console.log(word.match(regex)); // Output: ["Moon"]

regex = /Moon(?=Child)/
word = "Moon child"
console.log(word.match(regex)); // Output: null

// Contoh penggunaan (?<=y)x (lookbehind):
regex = /(?<=Jekyll)Hyde/
word = "JekyllHyde"
console.log(word.match(regex)); // Output: ["Hyde"]

regex = /(?<=Jekyll)Hyde/
word = "HydeJekyll"
console.log(word.match(regex)); // Output: null