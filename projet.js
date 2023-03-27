class Person {
    constructor(nom, age =  {
        this.nom = nom;
        this.age = age;
        this.ismajeur = (this.age >= 18);


    }

    salutation( {
        if (this.ismajeur) {
            console.log("Bonjour" + this.nom + ", tu as" + this.age + " ans donc tu es majeur.");
        }
        else {
            console.log(`Bonjour ${this.nom}, tu as ${this.age} ans donc tu es mineur. `);
        }
    }
}

const person1 = new Person("Nicolas", 20);
person1,salutation();
const person2 = new Person("Sylvain",23);
person2,salutation();


