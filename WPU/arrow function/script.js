// Function Expression
const tampilNama = function(nama){
    return `Halo, ${nama}`;
}

// Arrow Function
const displayName = (name, time) => {
    return `Halo ${nama}, selamat ${time}`;
}

let mahasiswa = ['Jono', 'Joko', 'Jiki'];

let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jumlahHuruf: nama.length}));
console.table(jumlahHuruf);



const box = document.getElementById('box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if(box.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600)
});