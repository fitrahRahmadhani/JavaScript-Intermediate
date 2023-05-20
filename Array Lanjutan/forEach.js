let colors = ['blue', 'red', 'yellow', 'green'];

colors.forEach(data => {
    console.log(data);
});

// Jika menggunakan index
colors.forEach((data, idx) => {
    if(idx % 2 === 0){ // melakukan pengecekan jika index elemen adalah bilangan genap
        console.log(data, idx)
    } else {
        console.log('not allowed', idx)
    }
});