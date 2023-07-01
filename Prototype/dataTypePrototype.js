// Digunakan untuk melihta properti apa saja yang dimilikioleh prototype String
console.log(String.prototype);

String.prototype.repeatString = function (n) {
    return this.repeat(n);
};
console.log("Skilvul".repeatString(3));

