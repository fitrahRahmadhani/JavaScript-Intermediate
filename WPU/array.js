// Manipulasi Array

// 1. Menambahkan isi array
var arr = [];
arr[0] = "Lorem";
arr[1] = "Ipsum";
arr[2] = "Dolor";
arr[3] = "Amet";

console.log(arr);

// 2. Menghapus isi array manual
arr[2] = undefined;
console.log(arr);

// 3.Menampilkan isi array (loop)
for(var i = 0; i < arr.length; i++){
    console.log("Mahasiswa ke-" + (i+1) + ' ' + arr[i]);
}

// Method pada Array
// 1.Join
console.log(arr.join(' - '));

// Push
arr.push("Rangga");
console.log(arr.join(' - '));

// Pop
arr.pop();
console.log(arr.join(' - '));

// Unshift
arr.unshift("Rangga");
console.log(arr.join(' - '));

// Shift
arr.shift();
console.log(arr.join(' - '));

// Splice
// splice(indexAwal, mauDihapusBerapa*, elemenBaru1, elementBaru2,..);
arr.splice(2, 1, "Eko", "Wahyu");
console.log(arr.join(' - '));

// Slice
// slice(awal, akhir)
var arrNew = arr.slice(1,3);
console.log(arrNew.join(' - '));

// ForeEach
arr.forEach(function(e, i){
    console.log(e + " foreEach ke-" + i);
});

// Map
var arrAnka = [1,3,2,4,6,7,5,10,3];
var arrAngka2 = arrAnka.map(function(e){
    return e * 2;
})
console.log(arrAngka2.join(" - "));


// Sort
arrAnka.sort();
console.log(arrAnka.join(" - "))

arrAnka.sort(function(a,b){
    return a-b;
});
console.log(arrAnka.join(" - "))

// Filter
var arrAnkaFilter = arrAnka.filter(function(e){
    return e > 3;
})
console.log(arrAnkaFilter.join(" - "))

// Find
var arrAnkaFind = arrAnka.find(function(e){
    return e > 3;
});
console.log(arrAnkaFind);