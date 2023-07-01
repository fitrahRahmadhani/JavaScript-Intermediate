function Person(name, age, hobby, job){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
}

// Menambahkan properti secara langsung menggunakan prototyping
Person.prototype.nationality = 'Indonesia';

// Buat instance ke dua
let myFather = new Person("William", 30, "Play games", "Enterpreneur");
let myMother = new Person("Jessica", 30, "Reading book", "Accountant");

// Melihat hasil data
console.log(myFather.name);
console.log(myFather.nationality);
console.log(myMother.name);
console.log(myMother.nationality);

// Menambhakan method
Person.prototype.greeting = function() {
    return "Hello " + this.name;
}

console.log(myFather.greeting());