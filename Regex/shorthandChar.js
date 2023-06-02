// Shorthand Character Classes pada umumnya digunakan untuk membedakan huruf dan angka, namun bisa juga dipakai untuk membedakan karakter lainnya (karakter spesial).

/*
Beberapa karakter spesial yang sering digunakan dalam character classes adalah:
.: digunakan untuk menggantikan karakter apapun.
\d: digunakan untuk mencocokkan semua angka (digit). Karakter spesial ini sama dengan [0-9]
\D: adalah negasi dari \d. Digunakan untuk mencocokkan karakter selain angka. Karakter spesial ini sama dengan ^[0-9]
\w: digunakan untuk mencocokkan semua huruf dan angka termasuk dengan garis bawah (_). Karakter spesial ini sama dengan [A-Za-z0-9_]
\W: adalah negasi dari \w. Digunakan untuk mencocokkan karakter selain huruf, angka dan underscore. Karakter spesial ini sama dengan [^A-Za-z0-9_].
\s: Digunakan untuk mencocokkan semua white space karakter, termasuk di dalamnya spasi dan tab.
\S: Adalah negasi dari \s. Digunakan untuk mencocokkan karakter selain spasi dan tab.
\: Untuk mengindikasikan karakter huruf yang diikuti spesial karakter seperti ?[]()\/|$^*.+, baik di awal, di tengah, ataupun di akhir sebuah kata. Misalnya, terdapat kata abc*, maka kita harus menambahkan \ di depan karakter *, sehingga pola regex yang dibuat adalah /abc\*/ 

// Contoh penggunaan ./:
let regex = /.o/gi;
let word = "Indonesia";
console.log(word.match(regex));

// Contoh penggunaan \d:
regex = /\d/gi;
word = "PS5 seharga $499";
console.log(word.match(regex));

// Contoh penggunaan \d:
regex = /\D/gi;
console.log(word.match(regex));

// Contoh penggunaan \w:
regex = /\w/gi;
console.log(word.match(regex));

// Contoh penggunaan \W:
regex = /\W/gi;
console.log(word.match(regex));

// Contoh penggunaan \s:
regex = /\s/gi;
console.log(word.match(regex));

// Contoh penggunaan \S:
regex = /\S/gi;
console.log(word.match(regex));

// Contoh penggunaan \:
regex = /halo\?/gi;
word = "halo?";
console.log(word.match(regex));
