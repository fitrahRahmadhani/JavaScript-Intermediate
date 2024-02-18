function init(){
    let nama = 'Sandhika';
    function tampilNama(){ // Inner function *closure karena menggunakan lexical scope
        console.log(nama);
    }
    tampilNama();
}
init();


function sapa(waktu){
    return function(nama){
        console.log(`Halo ${nama}, selamat ${waktu}`);
    }
}
let selamatPagi = sapa('Pagi');
let selamatSiang = sapa('Siang');
let selamatMalam = sapa('Malam');

selamatPagi('Tukijo');

let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
}());

console.log(add());
console.log(add());
console.log(add());