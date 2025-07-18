// console.log("hello");

// let obj = {
//     names: "rudra",
//     subject: "english"
// };
// obj.course= "btech";
// console.log(obj); 

// obj.names = "shyam"; 
// console.log(obj);

let arr = [1, 2, 3,4 , 5 , 4 , 3, 1];
let unique = 0;
for (let i = 0; i < arr.length; i++) {
    unique ^= arr[i];
}
console.log(unique); // Output: 3


