// Modul pada file JavaScript membutuhkan oenghubung antara satu file dengan file yang lain (export - import)

/*
====================================================================
Export digunakan untuk meng-export variabel pada fil JavaScript. Variabel yang di_export_ dapat berisi data seperti string, object, array, hingga function. 
*/

// contoh melakukan export pada variabel
export let name = "Fitrah";

// Contoh export objek JavaScript
export let orang = {
    nama: "Fitrah",
    umur: 20,
    alamat: 'Jl. Semanggi'
};

// Contoh export function
export function sayHello(user) {
    console.log(`Hello, ${user}!`);
}

// Mengexport variable name, object orang dan function sayHello sekaligu
// export {name, orang, sayHello};