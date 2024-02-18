console.log(nama);
let nama = 'Lorem';
let umur = 20;

console.log(sayHello());
function sayHello(){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun`;
}

// Step-step
// Creation phase pada Global Context
// nama var  = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window
// Execution phase

