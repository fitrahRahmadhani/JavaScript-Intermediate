/*
Promise -> janji

Jika disesuaikan dengan analogi promise pada JavaScript menjadi:
1. Pending / tertunda, jika belum melewati batas waktu dilaksanakan dan belum mengetahui janji tersebut bisa ditepati atau tidak
2. Fulfilled / terpenuhi, jika janji berhasil dipenuhi sebelum batas wakty yang ditentukan
3. Rejected / gagal, jika janji gagal ditepati karena sesuatu hal dan kita melakukan rencana lain
4. Settled / terselesaikan, jika semua janji sudah selesai terpenuhi kita bebas melakukan hal lainnya

*/


// Contoh menggunakan promise
let newPromise = new Promise((resolve, reject) => {
    if(true){
        // Apa yang dilakukan jika promise fulfilled
        resolve("Berhasil");
    }else{
        // Apa yang dilakukan jika promise rejected
        reject("Gagal");
    }
});

// Contoh penggunaan promise fullfilled
let condition = true;
newPromise = new Promise((resolve, reject) => {
    if(condition){
        // Apa yang dilakukan jika promise fulfilled
        resolve("Berhasil");
    }else{
        // Apa yang dilakukan jika promise rejected
        reject(new Error("Error Gagal"));
    }
});

// Mengeksekusi promise dengan then()
newPromise.then((result) => {
    console.log(result);
})

// Mengeksekusi lebih dari satu kali
newPromise.then((result) => {
    return result;
})
.then((result2) => {
    console.log(result2 + '!!');
})

// Contoh menggunakan promise rejected
condition = false;
let newPromise2 = new Promise((resolve, reject) => {
    if(condition){
        // Apa yang dilakukan jika promise fulfilled
        resolve("Berhasil");
    }else{
        // Apa yang dilakukan jika promise rejected
        reject(new Error("Error Gagal"));
    }
});

// Untuk mengantisipasi terjadinya error dapat menambahkan catch()
newPromise2.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error.message); // Output: "Error Gagal"
})
.finally(() => {
    console.log(
        "Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected"
    ); // Output Finnaly tetap terpanggil dalam kondisi fulfilled ataupun rejected
})
