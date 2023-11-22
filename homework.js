// use for loop, if something is an array or object

//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// create a function
function favoriteDish(person3) {
    for (let food in person3) {
        if (Array.isArray(person3[food])) {
            console.log(`${food}: ${person3[food].join(', ')}`);
        } else if (typeof person3[food] === 'object') {
            console.log(`${food}:`);
            for (let valueOfFood in person3[food][0]) {
                console.log(`  ${valueOfFood}: ${person3[food][0][valueOfFood]}`);
            }
        } else {
            console.log(`${food}: ${person3[food]}`);
        }
    }
}
favoriteDish(person3);

//display

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

// Use an arrow to create the printInfo method
printInfo = () => `${this.name} is ${this.age} years old today`

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
addAge = () => this.age = this.age + 1;
}   

const somePerson = new Person('Kenny', 30)
somePerson.addAge()
console.log(somePerson.printInfo())
somePerson.addAge()
somePerson.addAge()
somePerson.addAge()
console.log(somePerson.printInfo())

const somePerson2 = new Person('Kevin', 29)
console.log(somePerson2.printInfo())
somePerson2.addAge()
somePerson2.addAge()
somePerson2.addAge()
console.log(somePerson2.printInfo())

// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const ergastData = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()
    console.log(data)
}
ergastData()


// Codewars 1: Remove duplicates from list

// def distinct(seq):
//     final_list = []
//     for num in seq:
//         if num not in final_list:
//             final_list.append(num)
//     return final_list

// seq = [1, 1, 2]
// print(distinct(seq))
let finalList = [];
let seq = [1,1,2];

function distinct(seq) {
    for(let num of seq) {
        // had to look up NOT statements
        if (!finalList.includes(num)){
            // if it's not in finalList lets add it. Searched up add methods.
            finalList.push(num);
        }
    }
    return finalList;
}
console.log(distinct(seq))

// Codewars 2: Area or Perimeter
// def area_or_perimeter(l , w):
//     if l == w:
//         return l * w
//     else:
//         return (l * 2) + (w * 2)

//  Setting up variable values
let l = 10;
let w = 15;

// Determining the function
function areaOrPerimeter(l,w) {
    if (l === w) {
        return l * w
    }
    else {
        return (l * 2) + (w * 2)
    }
}
console.log(areaOrPerimeter(l, w))

