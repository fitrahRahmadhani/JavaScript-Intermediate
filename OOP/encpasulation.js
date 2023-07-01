class Hewan {
    constructor(nama){
        let _nama = nama;

        //getter
        this.getName = function() {
            return _nama;
        }

        //setter
        this.setName = function(nama){
            _nama = nama;
        }
        }
}
let kucing = new Hewan("TOM");

// call getter function
console.log(kucing.getName());

//update nama hewan, use setter function
kucing.setName('Delta');
console.log(kucing.getName());
