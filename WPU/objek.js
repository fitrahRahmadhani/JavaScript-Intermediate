// Objek Literal
var mhs = {
    nama: "Lorem Ipsum",
    nrp: "04232223",
    email: 'loremipsum@gmail.com',
    jurusan: "Teknologi Informasi"
}

var mhs2 = {
    nama: "Dolor Sit",
    nrp: "04232223",
    email: 'dolorsit@gmail.com',
    jurusan: "Teknologi Pertanian"
}
console.log(mhs);


// Fungction Declaration
function createMhsObject(nama, nrp, email, jurusan){
    var mhs = {};
        mhs.nama = nama;
        mhs.nrp = nrp;
        mhs.email = email;
        mhs.jurusan = jurusan;
        return mhs;
}
var mhs3 = createMhsObject('Tukimin', '0034381321','tukimin@gmail.com', 'Teknik Pangan');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa("Tukijo", "131839329", "tukijo@gmail.com", "Teknik Mesin");
