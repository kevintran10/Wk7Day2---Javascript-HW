console.log('testing')
// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/
const date = new Date()
// const day = new Date().getDay()
const day = date.getDay()

switch(0) {
    case 1:
        console.log('Today is Mondayyyy zzz')
        break;
    case 2:
        console.log('It is Tuesday...')
        break;
    case 3:
        console.log('It is wednesday, officially the middle of the week!')
        break; 
    case 4:
        console.log('today is Thursday, almost Friday!')
        break;
    case 5:
        console.log('it is Friday, Friday, got to get down on Friday.')
        break; 
    default:
        console.log('it is the weekend baby!') 
}

// JS Objects (Python Dicts)
const favPlayer = {
    playerName: 'Kobe Bryant',
    playerNum: 24,
    playerTeam: 'LA Lakers'
}
// access data in objects (using bracket or dot notation)
console.log(favPlayer["playerName"])
console.log(favPlayer.playerTeam)
// Inclass Exercise #1 (Get the Value 'Manchester United')
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
      {
        baseball: "Chicago White Sox",
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"],
      },
      {
        baseball: "Toronto Bluejays",
        football: "LA Rams",
        basketball: "Milwalkee Bucks",
        soccer: ["Manchester United", "Liverpool"],
      },
    ],
  };

// Solution Here:
console.log(person2.teams[1].soccer[0])
console.log
// JS Object methods ((Object.keys(object), Object.values(object))
console.log(Object.keys(person2))
console.log(Object.values(person2))
// looping an object using for in
// for in: iterates over keys in object or indices in an array
for (let key in person2) {
    console.log(person2[key])
}


// ---------- Creating a JS Class ----------
class Team{
    constructor(city, name) {                   
        this.city = city
        this.name = name
    }

    printInfo() {
        return `The ${this.name} is from ${this.city}`
    }

    printInfo = () => `The ${this.name} is from ${this.city}`
}
// Creating an instance
const lakers = new Team('LA', 'Lakers')
console.log(lakers.printInfo)

// Inheriting from a class using 'extends'
class Player extends Team {
    constructor(city, name, playerName) {
        super(city, name)
        this.playerName = playerName
    }

    printInfo2() {
        return `${this.playerName} plays for ${this.city} ${this.name}`
    }
}
const lebronJames = new Player('LA', 'Lakers', 'Lebron James')
console.log(lebronJames.printInfo())
// ---------- JS Closures ----------
let grandpa = 'grandpa'
function a() {
    let father = 'father'
    return function b() {
        let son = 'son'
        return function c() {
            return `${grandpa} -> ${father} -> ${son}`
        }
    }
}
console.log(a()()())
// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

// returns a pending promise
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)

// handle pending promise with .then(), .catch()
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log('there was a problem handling your promise', err)
})
// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6)
const pokemonData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    console.log(data)
}

pokemonData()