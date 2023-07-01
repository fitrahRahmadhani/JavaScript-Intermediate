class Hewan {
    constructor(nama){
        this.nama = nama;
    }

    suara(){
        console.log("Ini suara hewan");
    }
}

class Kucing extends Hewan{
    constructor(nama){
        super(nama);
    }

    // Override
    suara(){
        console.log("miaaw");
    }
}
let kucing = new Kucing("TOM");
kucing.suara();