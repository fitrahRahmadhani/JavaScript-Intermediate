// DOM Selection

// document.getElementById() -> element 
const judul = document.getElementById('judul');
judul.style.color = 'white';
judul.style.backgroundColor = 'black';
judul.innerHTML = 'Hello, There';

// document.getElementsByTagName -> HTMLCollection
const p = document.getElementsByTagName('p');
p[0].innerHTML = "Ini adalah element p pada HTMLCollection ke-0";
p[1].style.backgroundColor = 'pink';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize =  '50px';

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini dirubah dari Javascript';
