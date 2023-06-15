/* 

Group adalah pengelompokkan karakter yang di-capture ke dalam regex menggunakan tanda kurung(). Group memberikan 2 hasil, yaitu:

1. Menghasilkan suatu bagian dari fungsi match() menjadi item terpisah.
2. Ketika kita menambahkan quantifier seperti tanda + setelah tanda kurung(), maka semua yang di dalam tanda kurung akan dianggap menjadi satu bagian

Karakter spesial yang sering digunakan dalam group adalah:
1. (x) Digunakan untuk mencocokkan karakter dalam () menjadi beberapa grup
2. (?<Name>x) Digunakan untuk mencocokkan karakter dalam () menjadi beberapa grup yang diberi nama

Contoh penggunaan (x):

*/
// menjadikan isi dari First_Name dan Last_Name sebuah grup ()
let regex = /First_Name: (\w+), Last_Name: (\w+)/;
let word = "First_Name: John, Last_Name: Doe First_Name: Jane, Last_Name: Smith";

let match = word.match(regex);
console.log(match) // Output: ["First_Name: John, Last_Name: Doe", "John", "Doe"]
console.log(`hello ${match[1]} ${match[2]}`); // Output: hello John Doe

// menjadikan isi dari First_Name dan Last_Name sebuah grup () dengan nama 'firstname', 'lastname'
regex = /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/g; 
word = "First_Name: John, Last_Name: Doe First_Name: Jane, Last_Name: Smith";

match = regex.exec(word);
console.log(match.groups) // Output: { "firstname": "John", "lastname": "Doe" }
