let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7]
];

// Menggunakan for()
for (let i = 0; i < inventory.length; i++){
    for(let j = 0; j < inventory[i].length; j++){
        console.log(inventory[i][j]);
    }
}

// Menggunakan forEach()
inventory.forEach((baris) => {
    baris.forEach((kolom) => {
        console.log(kolom);
    });
});

// Menggunakan map
inventory.map((baris) => {
    baris.map((kolom) => {
        console.log(kolom);
    });
});