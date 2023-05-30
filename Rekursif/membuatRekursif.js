// Rekursif, fungsi memanggil dirinya sendiri

// Base case, kasus dasar untuk menyelesaikan permasalahan (akan dijalankan ketika kondisi terpenuhi)

// Recursion call, permasalahan akan diperkecil dengan mengurangi atau memecah data input pada setiap pemanggilannya hingga mencapai base case

// Contoh penerapan function faktorial

function faktorial(value){
    if(value == 1){
        return 1;
    }else{
        return value * faktorial(value-1);
    }
}

console.log(faktorial(5));