// Function Constructor


// Membuat costructor
function Person(name, age, hobby, job){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
}

// Membuat instance
let myFather = new Person("William", 30, "Play games", "Entrepreneur");
let myMother = new Person("Jessica", 30, "Readiung book", "Accountant");

// Melihat hasil data
console.log(myFather.name);
console.log(myMother.name);