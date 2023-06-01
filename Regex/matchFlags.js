// Contoh penggunaan match
const regex = /i/;
const word = "Indonesia";
console.log(word.match(regex));

/* Special character flag 
    g, untuk mencari ke dalam seluruh string
    i, untuk mengabaikan aturan case-sensitive
*/

const regex2 = /n/g;
const word2 = "Indonesia";
console.log(word2.match(regex2));

const regex3 = /i/ig;
const word3 = "Indonesia";
console.log(word3.match(regex3));

const regex4 = /i/i;
const word4 = "Indonesia";
console.log(word4.match(regex4));
