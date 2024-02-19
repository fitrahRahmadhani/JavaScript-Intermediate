// DOM Manipulation

const sectionA = document.querySelector('section#b');
sectionA.innerHTML = '<h2>Hello World</h2>';

const judul = document.getElementById('judul');
judul.style.color = 'white';
judul.style.backgroundColor = 'black';


// Menambahkan attribut baru
judul.setAttribute('name', 'tukijo');

// Menghapus attribut
const a = document.querySelector('a');
a.removeAttribute('href');

const c = document.querySelectorAll('section#c ul li');
c[0].classList.add('bg-orange');