// // // // // // // // // // // 
// Shallow copy through
// assingment operator

//shallow copy => when the  clone object is having reference to old object, this is known as shallow copy.
// let obj1 = {
//   a: 10,
// };

// let obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj1.a = 70;

// console.log(obj1);
// console.log(obj2);
// // // // // // // // // // // 

// // // // // // // // // // // 
// trying deep clone using
// spread operator ('...')

//Using spread operator => if  i am cloning obj1 to obj2 and then change any property in obj2, it should not reflect in obj1.
//pread operator is used to spread the properties by properties.
//cloning through the spread operator resulting in any it may be deep copy / shallow copy.

// let obj1 = {
//   a: 10,
// };

// let obj2 = { ...obj1 };

// console.log(obj2);
// console.log(obj1);

// obj2.a = 100;

// console.log(obj2);
// console.log(obj1);
// // // // // // // // // // // 

// // // // // // // // // // // 
// trying deep clone on nested
// object using '...' operator it results in shallow copy because the spread opertor for the nested object  will give the reference.


// let obj1 = {
//   a: 10,
//   b: {
//     c: 100,
//   },
// };

// let obj2 = {
//   ...obj1,
// };


// obj2.b.c = 20;

// console.log(obj1);
// console.log(obj2);

// // // // // // // // // // // 

let obj1 = {
  a: 10,
  b: {
    c: 100,
  },
};

let stringObj1 = JSON.stringify(obj1);
//The above line will converts the object into string.
//JSON.stringify => It gives the string version of objecrt which has no reference to old object.

console.log(stringObj1);

const obj2 = JSON.parse(stringObj1);
//The above line will converts the string back to object.
//JSON.parse => It gives the object version of any string if it's possible.
// console.log(obj2);

obj1.b.c = 300;

console.log(obj1);
console.log(obj2);

// const test = JSON.parse('riyazz');
// console.log(test);
