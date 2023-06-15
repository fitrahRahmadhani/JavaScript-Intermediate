/*
    Range adalah pengelompokkan karakter yang memiliki rentang, seperti a-z(a sampai z) atau 1-4 (1 sampai 4), yang kemudian di-capture ke dalam regex menggunakan tanda [].
    
    Beberapa karakter spesial yang sering digunakan dalam range adalah:
    1. x|y digunakan untuk memberikan alternatif pilihan, jika tidak cocok dengan X maka oilih Y, begitu pula sebaliknya.
    2. [xyz] Digunakan untuk membuat kumpulan karakter. 
    3. [^xyz] Digunakan untuk mencari karakter selain dari kumpulan karakter yang telah didefinisikan

*/

// Contoh penggunaan x|y
let regex = /PS5|XBOX/gi;
let word = "PS5 berwarna hitam";
console.log(word.match(regex));

// Contoh penggunaan [xyz]
regex = /[aiueo]/gi;
console.log(word.match(regex));

// Contoh penggunaan [xyz]
regex = /[^aiueo]/gi;
console.log(word.match(regex));
