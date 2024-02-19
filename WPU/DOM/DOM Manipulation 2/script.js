// DOM Selection

// document.querySelector() -> first element
const p = document.querySelector('#b p');
p.style.backgroundColor = 'red';
p.innerHTML = 'Ini diubah menggunakan Javascript';


// document.querySelectorAll()
const paragraph = document.querySelectorAll('li');
paragraph[1].style.backgroundColor = 'orange';