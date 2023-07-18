// question 1

//create an array

ages = [3, 9, 23, 64, 2, 8, 28, 93];

//establish function for repetition

function subtractTheElement() {
    return ages[0] - ages[ages.length - 1] ;
}

// print to the console

console.log(subtractTheElement()); //prints -90 (which is correct)

// add a new element

ages.push(41); //pushes 41 to the end of array ages

// print new result to console

console.log(subtractTheElement()); // prints -38

// establish variables for loop

let total = 0;

// writing a loop

for (var number of ages) {
    total += number;
}

// dividing by added total each time
average = total / ages.length;

console.log (average); // returns 30.11...

// question 2 

const namesArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//creating loop
let totalLength = 0;

for (let i = 0; i < namesArray.length; i++) {
    totalLength += namesArray[i].length;
}

const averageLength = totalLength / namesArray.length; // divide by sum to get average

console.log(averageLength); // print to console, returns 3.8333 repeating

let allNamesTogether = namesArray.join(", ");

console.log(allNamesTogether); //returns Sam, Tommy, Tim, Sally, Buck, Bob

console.log(`To access the last element of any array, you must print console.log(arrayHere.length - 1);.`); // printing answer to the console

console.log(`To access the first element of any array, you must print console.log(arraryHere[0]). With any given array, the first element will always be 0.`) // ditto

let names = ['Kelly', 'Sam', 'Kate'];
let nameLengths = [5, 3, 4]; // establishing arrays

for (let i = 0; i < nameLengths.length; i++) {
  names.push(nameLengths[i]); // "push"ing array "namesLengths" into "names" (see what i did there <.<)
}

console.log(names); // returns ['Kelly', 'Sam', 'Kate', 5, 3, 4]

let sumOfNames = 0; // establishing something to call back on 
for (let i = 0; i < names.length; i++){
    if (typeof names[i] === 'string'){ // is the array a string?
        sumOfNames += names[i].length
    } else if (typeof names[i] === 'number'){ // is the array a number?
        sumOfNames += names[i]
    }
}

console.log(sumOfNames);
// previously had word * n and was confused why I kept getting NaN. After further research, I realized
// that it was string multiplying by a number

// question 7
let statement = (word, n) => word.repeat(n); // use arrow function here cuz it's tidy

console.log(statement("Hello", 3)); // returns HelloHelloHello

//question 8 

let fullName = (firstName, lastName) => firstName.concat(" " + lastName); // with (" " + lastName) it adds the fancy space

console.log(fullName('Lei', 'de Leon')); // returns my name (how'd it know that)

//question 9
let linkCanCarry = [20, 14, 5994, 100, 138861, 59940, 614]; // all of the items Link can carry in BOTW, seperated by type
let linkBigStrong = 0;

function sumNoHundie() {
    for (let i = 0; i < linkCanCarry.length; i++) {
        linkBigStrong += linkCanCarry[i]; // adding the sum of all the elements in the array together
    }
  
    if (linkBigStrong < 100) { // if the sume is NOT bigger than 100, linkNoStrong :(
        console.log('false');
    } else {
        console.log('true');
    }
}

sumNoHundie(); // calling the function without parameters cuz they are in the function (but i should)
//returns true

//question 10
let eponasStats = [5, 3, 4, 3]; // stats of my favorite horse in BOTW (seperated by type again)
let eponasStatsAverage = 0;

function averageOfNumbers() {
    for (let i = 0; i < eponasStats.length; i++) {
        eponasStatsAverage += eponasStats[i];
    }
    
    eponasStatsAverage /= eponasStats.length; // Calculate the average by dividing the sum by the length
}

averageOfNumbers(eponasStats); // Pass the eponasStats array as an argument to the function

console.log(eponasStatsAverage); // Print the average to the console, returns 3.75

// Zant is stronger than Epona :O

let zantsStats = [3, 5, 2, 5];
let arr2average = 0;
let arr1average = 0;
// using eponas stats to compare to zant
function averageOfHorseStats (arr1, arr2){ // adding parameters so the arrays could be changed later
    for (let i = 0; i < arr1.length; i++){
        arr1average += arr1[i]
    }
    for (let i = 0; i < arr2.length; i++){
        arr2average += arr2[i]
    }
    if (arr1average > arr2average){
        console.log(`True.`)
    } else {
        console.log(`False.`)
    }
}
averageOfHorseStats(eponasStats, zantsStats); // prints False

let isHotOutside = true
let moneyInPocket = 3

function willBuyDrink (arr1, arr2){
    if (arr1 === 'true' && arr2 > 10.50){ // if param 1 is TRUELY equal to true and param 2 is greater than 10.50
        console.log('True.');
    } else {
        console.log(`I'm too broke for a drink :C.`)
    }
}

willBuyDrink(isHotOutside, moneyInPocket); // the computer called me broke 

// my own problem

// video commentary :D

let linksHearts = 5;
let enemies = ['Bokoblin', 'Moblin', 'Lizalfo', 'Lynel', 'Gleeok'];
const randomEnemy = Math.floor(Math.random() * enemies.length);

function willHeSurvive(arr1, arr2) {
  if (arr1 < 3 || enemies[arr2] === 'Lynel' || enemies[arr2] === 'Gleeok') {
    console.log('Link has died.');
  } else {
    console.log('Link is a murderer.');
  }
}

willHeSurvive(linksHearts, randomEnemy);
