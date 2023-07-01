class Person{
    constructor(firstName, lastName, job){
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Job{
    constructor(company, position, salary){
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
}

let salah = new Person({
    firstName: "Muhammad",
    lastName: "Salah",
    job: new Job('Liverpool', 'Striker', 200000)
});

