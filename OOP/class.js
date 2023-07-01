class Hewan{
    constructor(nama, kaki){
        this.nama = nama;
        this.kaki = kaki;
    }
    tidur(){
        return `${this.nama} sedang tidur`;``
    }
}

let hewan1 = new Hewan('Kucing', 4);

console.log(hewan1.nama);
console.log(hewan1.nama);
console.log(hewan1.tidur());