// //Destructuring
// // 1.basic
// const numbers = [10, 20, 30];
//  const [a, b, c] = numbers;

// console.log(a);
// console.log(c); 
// console.log(b); 

// //2.skipping value
// const data = [1, 2, 3, 4];
// const [first, , third] = data;

// console.log(first); 
// console.log(third);

// //3.Default value
// const values = [5];
// const [x = 1, y = 2] = values;

// console.log(x);
// console.log(y); 

// //4. rest operator
// const nums = [100, 200, 300, 400];
// const [head, , ...tail] = nums;

// console.log(head);
// console.log(tail);

// //5.Swapping
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a); // 2
// console.log(b); // 1age


/*-----Now with the object------*/
// const obj={
//     name :"priyanshu",
//     age : 25,
//     gender : "M",
//     address:{
//         state: "U.P",
//         city: "Lucknow"
//     }
// }
// const {exp = 288 ,name: fname} = obj;
// console.log(fname)
// console.log(exp)


// // destructuring doesnot change object

// const {address:{state,city},...other} = obj;
// console.log(state)


// console.log(other)




//Spread Property

// let arr = [10 , 20 , 30 ,40 , 50 ,60];
// let [a1,a2 ,...spread] = arr
// console.log(spread);

const user = {
  name: "Rudra",
  age: 402
};

const clone = { ...user };
console.log(clone);

let car = {
  brand: "BMW",
  type: "Cooper",
  speed: 202
};

let { type, ...restCar } = car;
console.log(type);     
console.log(restCar); 

let combined = { ...user, car };
console.log(combined);

let flatCombined = { ...user, ...car };
console.log(flatCombined);
