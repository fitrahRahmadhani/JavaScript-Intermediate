const fruits = [
    {
        nama: "strawberry",
        color: "red",
        qty:5
    },
    {
        nama: "blueberry",
        color: "blue",
        qty:10
    },
    {
        nama: "orange",
        color: "orange",
        qty:2
    },
    {
        nama: "grape",
        color: "purple",
        qty:5
    },
];

// Menggunakan for
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].nama);
// }

// Menggunakan map
// fruits.map(data => console.log(data.color));

const tableContent = document.getElementById("fruit-table"); // Mendapatkan elemen table

// Menjumlahkan seleuruh buah
const totalBuah = fruits.reduce((total, data) => {
    return total + data.qty
}, 0);

// Mencetak data ke dalam tabel
fruits.map((data, i) => {
    const row = tableContent.insertRow(i); // Membuat element <tr> dengan HTML DOM Table insert Row()
    row.insertCell(0).innerHTML = data.nama; // menginput nama buah ke dalam kolom pertama dengan HTML DOM Table insertCell()
    row.insertCell(1).innerHTML = data.color; // menginput warna buah ke dalam kolom kedua dengan HTML DOM Table insertCell()
    row.insertCell(2).innerHTML = data.qty; // menginput total buah ke dalam kolom ketiga dengan HTML DOM Table insertCell()
})

const lastRow = tableContent.insertRow(tableContent.rows.length); // Menambahkan row terakhir

// menggabungkan 2 kolom dengan colspan
const lastRowCell1 = lastRow.insertCell(0);
lastRowCell1.setAttribute("id", "lastCell");
const td = document.getElementById("lastCell").colSpan = "2"
lastRowCell1.innerHTML = "Total";

lastRow.insertCell(1).innerHTML = totalBuah;
