// Mengakses elemen <body>
let body = document.body;

// Membuat elemen <h1>
let heading = document.createElement("h1");

// Memasukkan element <h1> kedalam elemen <body>
body.appendChild(heading);

// Membuat attribut
let id = document.createAttribute('id');

// Memasukkan nilai attribute
id.value = "mainHeading";

// Set attribute pada <h1>
heading.setAttributeNode(id);

// Membuat konten pada elemen
let contentHeading = document.createTextNode('Ini heading');

// Memasukkan konten yang telah dibuat ke dalam elemen heading <h1>
heading.appendChild(contentHeading);