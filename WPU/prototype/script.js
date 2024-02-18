class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    // Jika langsung define method
    main = function(jam){
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }
    tidur = function(jam){
        this.energi -= jam * 2;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}
// Jika menggunakan prototype
Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}


let tukijo = new Mahasiswa('Tukijo', 10);