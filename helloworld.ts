// let message : string = 'Hello World';
// console.log(message);

// function helloWorld() : string {
//    let  helloWorld : string = 'Hello World';
//    return helloWorld;
// }

// let myStatement: string = helloWorld();

// let myArray: string[] = ['Brendan', 'Jack', 'Lucy'];

// myArray.push('Jon');

// console.log(myArray[3]);

// // for (let i: number = 0; i < myArray.length; i++) {
// //     console.log(myArray[i]);
// // }

class Person {
    name: string;
    age: number;
    hobbies: string[];
}

function makeNewPerson(name: string, age: number, hobbies: string[]):void {
    const person = new Person();
    person.name = name;
    person.age = age;
    person.hobbies = hobbies;
    console.log(person.name);
    console.log(person.age);
    for(let i = 0; i < person.hobbies.length; i++) {
        console.log(person.hobbies[i]);
    }
}

makeNewPerson('Brendan', 27, ['Photography', 'Gym', 'Golf']);

