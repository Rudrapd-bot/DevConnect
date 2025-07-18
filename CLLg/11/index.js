//Date : 11/jul/2025
/*1st concept- callback()
// call back function
// js m ek func m dusara func as a parameter pass kar sakte hai

function sayHello() {
    console.log("Hello there");
}

function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback(); // calling the callback function
}

// // Using the greet function and passing sayHello as a callback
// greet("Rudra", sayHello);
*/


// /*2.nd concept
// // map filter reduse
// // to get square of nums
// /*map*/
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(nums);
// let squares = nums.map(function(num) {
//     return num * num;
// });
// console.log(squares);
// /*Reduce*/
// let sum = nums.reduce(function(sum,num) {
//     return num+sum;
// },0);
// console.log(sum);
// /*filter*/
// let evenNumbers = nums.filter(function(num) {
//     return num % 2 === 0; // condition to keep only even numbers
// });

// console.log(evenNumbers); // [2, 4, 6, 8]

// /*3rd.concept*/
// //Arrow function
// let sq = (n)=> n*n;

// console.log(sq(5))


// let words = ["code", "javascript", "map", "filter"];
// let longWords = words.filter(word => word.length > 4); // ["javascript", "filter"]
// console.log(longWords)

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let squares = nums.map(num => num*num);

// console.log(squares);




/*------homework---------*/ 


// Date: 11/Jul/2025

// 1st Concept - Callback Function

function displayTime() {
    console.log("The current time is: " + new Date().toLocaleTimeString());
}

function greetUser(username, callback) {
    console.log("Welcome, " + username + "!");
    callback(); // Calling the callback function
}

greetUser("Rudra", displayTime);


// 2nd Concept - map(), filter(), reduce()

let marks = [45, 78, 89, 32, 90, 55];

// map() - Add 5 grace marks to each student
let updatedMarks = marks.map(mark => mark + 5);
console.log("Updated Marks (map):", updatedMarks);

// filter() - Select students who passed (mark >= 50)
let passedStudents = updatedMarks.filter(mark => mark >= 50);
console.log("Passed Students (filter):", passedStudents);

// reduce() - Calculate total marks of passed students
let totalMarks = passedStudents.reduce((sum, mark) => sum + mark, 0);
console.log("Total Marks of Passed Students (reduce):", totalMarks);


// 3rd Concept - Arrow Functions

// Square of a number using arrow function
let square = num => num * num;
console.log("Square of 6 is:", square(6));

// Filter names longer than 4 letters
let names = ["Amit", "Neha", "Sakshi", "Jay", "Priya"];
let longNames = names.filter(name => name.length > 4);
console.log("Long Names:", longNames);

// Map names to their lengths
let nameLengths = names.map(name => name.length);
console.log("Name Lengths:", nameLengths);




















