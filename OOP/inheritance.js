class Hewan {
    constructor(nama, kaki){
        this.nama = nama;
        this.kaki = kaki;
    }

    tidur(){
        return `${this.nama} sedang tidur`;
    }
}

class Kucing extends Hewan{
    constructor(nama, kaki, makanan){
        super(nama, kaki);
        this.makanan = makanan;
    }

    mencuri(){
        return `${this.nama} mencuri ${this.makanan}`;
    }
}

let kucing = new Kucing("Tom", 4, "Ikan");
console.log(kucing.nama);
console.log(kucing.tidur());
console.log(kucing.mencuri());