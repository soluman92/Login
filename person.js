class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    show(){
        console.log(`my namr is ${this.name} && iam ${this.age} years old ago `);
    }
}

module.exports = person;