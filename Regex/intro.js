// Regex (Regular Expression) adalah deretan karakter spesial yang menggambarkan pattren atau pola untuk pencarian teks pada sebauh string atau document

// Method .exec(), digunakan untuk mencari string sesuai pola yang tersedia dengan mengembalikan nilai array atau null.

let string = "Saya suka kopi";
let pattren = /kopi/;
let result = pattren.exec(string);
console.log(result);

string = 'Indonesia Tanah Air Ku';
words =  ['Tanah', 'Air'];
result = new RegExp(words.join(' ')).exec(string);
console.log(result);

// Method .test() digunakan untuk string matching dari percarian teks pada pola regex yang tersedia dengan pengembalian nilai boolean.
let regex = /Test/;
console.log(regex.test('Test'));

const kata = ["Tes", "Tess", "Test"];
console.log(new RegExp(kata[1]).test('Test')); // Output: false

