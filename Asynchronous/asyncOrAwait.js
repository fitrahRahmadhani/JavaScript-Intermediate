// // Async, mengubah function synchronous menjadi asynchronous
// async function testAsyncAwait(){
//     return "Fulfilled";
// }
// console.log(testAsyncAwait());

// // async menggunakan arrow function
// const tesAsyncAwait = async() => {
//     return "Fulfilled";
// }
// console.log(testAsyncAwait());

// Await, hanya bisa digunakan dalam async function dan await adalah keyword dalam async yang digunakan untuk menunda hingga proses asynchronous selesai.
// async function tesAsyncAwait(){
//     await 'Fulfilled';
// }
let condition = true;
let tesAsyncAwait = async (condition) => {
    if (condition) {
        return "Condition is fulfilled!";
    } else {
        throw "Condition is rejected";
    }
}
// Membuat fungsi run menjadi asynchronous menggunakan async/await
const run = async (condition) => {
    try {
        const message = await tesAsyncAwait(condition);
        console.log(message);  // Output: Condition is fulfilled!
        console.log("After condition is fulfilled"); // Output: After condition is fulfilled
    } catch (error) {
        console.log(error);
    }
};

run(true);