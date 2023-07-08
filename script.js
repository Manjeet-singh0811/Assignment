// values and Datetypes
/*1. Create  a javescript files , using javascript  comments, List all the datatypes of javescripts and specify an example for each of them.*/

// string
const string = "hey how are you.";
console.log(string);
//number
const age = 26;
console.log(age);
// booleans
let isLogged = true;
let isHidden = false;
console.log(isLogged);

//null
let myVariable = null;

//Undefined:
let myName;

//BigInt
let largeNumber = 123456789012345678901234567890n;
console.log(largeNumber);
//Array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
console.log(numbers, fruits);

//Object
let person = {
  name: "manjeet",
  age: 20,
  city: "mohali",
};
console.log(person);
// fuctions
function sayHello() {
  console.log("Hello!");
}

// symbol
let id = Symbol("id");

//2. Create an array of 10 products that you have recently purchased or viewed on an e-commerce site
let recentPurchased = [
  "Headphone",
  "Water bottle",
  " Bag",
  "laptop cooling pad",
  "cap",
  "keyborad",
  "mobile",
  "cloth ",
  "USB light",
  "tp link",
];
console.log(recentPurchased);

// 3. Create an object of a student registry of 5 students whose key is  the registration number and the values is the student name. Registration number starts from 1 and continues.

let studentRegistry = {
  1: "Manjeet",
  2: "Amarjeet",
  3: "Nihal",
  4: "sanjay",
  5: "sonu",
};
console.log(studentRegistry);
