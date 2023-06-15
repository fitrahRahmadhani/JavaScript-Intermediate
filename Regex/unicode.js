/* Unicode property escapes digunakan untuk membedakan berdasarkan karakter unicode, misalnya huruf besar kecil, simbol matematika, dan tanda baca.

contoh: \p dan \P

*/

/*
======================================================================
    Karakter **\p**
Ada dua jenis penggunaan \p ini, yaitu:

Non-binary values
\p{UnicodePropertyValue} atau \p UnicodePropertyName=UnicodePropertyValue} dimana UnicodePropertyName terdiri dari General_Category (gc), Script (sc), Script_Extensions (scx), sedangkan untuk UnicodePropertyValue terdiri dari: Letter (L), Symbol (S), Separator (Z), Number (N), dan lain sebagainya.

Contoh penggunaan \p{UnicodePropertyName=UnicodePropertyValue}:
*/ 
let regex = /\p{General_Category=Letter}/gu;
let word = 'Skilvul';
console.log(word.match(regex));

regex = /\p{Script_Extensions=Hira}/gu;
word = "あ";
console.log(regex.test(word));
/*
Binary & non-binary values
UnicodeBinaryPropertyName sering digunakan untuk kode ASCII (American Standard Code for Information Interchange).

Contoh penggunaan {UnicodeBinaryPropertyName}:
*/
regex = /\u0024/gu;
word = "PS% seharga $499";
console.log(word.match(regex));


/*
======================================================================
    Karakter **\P**
\P adalah negasi dari \p

Contoh penggunaan \P:
*/ 
regex = /\P{General_Category=Letter}/gu;
word = "Skilvul";
console.log(word.match(regex));

regex = /\p{Script_Extensions=Hira}/gu;
word = "あ";
console.log(regex.test(word));