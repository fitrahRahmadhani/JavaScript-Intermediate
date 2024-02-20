// DOM Manipulation

// Create new element
const newParagraphElement = document.createElement('p');

// Create content
const newContent = document.createTextNode('Ini adalah Paragraf Baru');

// Append
newParagraphElement.appendChild(newContent);

// Simpan elemen ke akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(newParagraphElement);

const newLiElemeny = document.createElement('li');
const newLiContent = document.createTextNode('Item 2 Baru');
newLiElemeny.appendChild(newLiContent);

// mencari parent dan menambahkan elemen sebelum x
const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(newLiElemeny, li2);

// Menghapus elemen
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Replace element
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2baru = document.createElement('h2');
const teksh2baru = document.createTextNode('Ini adalah h2 hasil replace');
h2baru.appendChild(teksh2baru);
sectionB.replaceChild(h2baru, p4);