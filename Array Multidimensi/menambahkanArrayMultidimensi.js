let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7]
];

// Menggunakan for()
for(let i = 0; i < inventory.length; i++){
    let stokTersisa = 100 - inventory[i][1];
    inventory[i].push(stokTersisa);
}
console.log(inventory);