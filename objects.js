// 1. Basics
// let circle ={
//     radius : 1,
//     location : {
//         x: 1,
//         y: 1,
//     },
//     isVisible : true,
//     draw : function() {   // Function
//         console.log('draw');
//     }
// };
// circle.draw(); // Method 

// 2. Factory Functions
// function createCircle(radius) {
//     return {
//         radius,  // In modern Javascript if key value pairs are same we can write it as a single pair(radius : radius ---> radius)
//         draw () { //Also we can rewrite the function 
//             console.log('draw');
//         }
//     };
// }
//  const circle1 = createCircle(1);
//  console.log(circle1);

// 3. Constructor Functions
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function( ) {
//         console.log('draw');
//     }
// }
// const circle1 = new Circle(1);
// console.log(circle1);

// 4. Dynamic Nature of Objects
// const circle = {
//     radius :1
// };
// // circle = {}; we cannot reassign a constant but we can always change, add or remove properties
// circle.color = 'yellow';
// circle.draw = function(){}
// delete circle.color;
// delete circle.draw;
// console.log(circle);

// 5. Constructor Property


// 6. Functions are objects
//  function Circle(radius) {
//      this.radius = radius;
//      this.draw = function( ) {
//          console.log('draw');
//      }
//  }
//  Circle.call({}, 1);
//  Circle.apply({}, [1, 2, 3]);
//  const circle1 = new Circle(1);

// 7. Value (vs) Reference Types
// let x = 10;
// let y = x;
//  x = 20;

// 8. Enumerating properties of an Object
// const circle = {
//     radius : 1,
//     draw () {
//         console.log('draw');
//     }
// };
// for (let key in circle)
// console.log(key, circle[key]);
// for (let key of Object.keys(circle))
// console.log(key);
// for (let entry of Object.entries(circle))
// console.log(entry);
// if ('radius' in circle) console.log('yes');

// 9. Cloning an Object
// const circle = {
//     radius : 1,
//     draw() {
//         console.log('draw');
//     }
// };
// const anothercircle = {};

// // for (let key in circle)
// // anothercircle[key] = circle[key];
// // console.log(anothercircle);

// // const another =Object.assign({ color:'yellow'}, circle);
// // console.log(another);

// // const another = {...circle};
// // console.log(another);

// 10. Garbage Collection---> Our JavaScript Engine has a garbagr collector whose job is to find variables
// and constants that are no longer used and deallocate memory created earlier.

// 11. Math


// 12. String


// 13. Template Literals
// const message = 
// `This is my
// 'first' message`;
// const name = 'john';
// const another = `hi ${name}`;

// 14. Date
// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9, 0);

// now.setFullYear(2017);


// 15. Address Object
// let address = {
//     street : 'Demasseonouve',
//     city   : 'Montreal',
//     zipcode: 517501,
// };

// function showAddress(address) {
//     for (let key in address) 
//         console.log(key,address[key]);
    

// }
// showAddress(address);

// 16. Factory and Constructor Functions
// function factoryFun(street, city ,zipcode){
//     return {
//         street,
//         city,zipcode,

//     };
// }
// const factoryobject = factoryFun('a','b','c');
// console.log(factoryobject);
// function Factory(street, city ,zipcode){
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }
// const factoryobject = new Factory('a', 'b', 'c');
// console.log(factoryobject);

// 17. Object Equality
// let address1 = new Address('a','b','c');
// let address2 = new Address('a','b','c');
// let address3 = address1;

// function Address(street, city, zipCode){
//     this.street = street;
//     this.city = city;
//     this.ziCcode = zipCode;
// }
// function areEqual(address1,address2){
//     return address1.street === address2.street &&
//            address1.city === address2.city &&
//            address1.zipCode === address2.zipCode;

// }
// function areSame(address1,address2){
//     return address1 === address2;

// }
// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));
// console.log(areSame(address1,address3));


// 18. Blog Post Object
// let blogPost = {
//     title: 'a',
//     body : 'b',
//     author: 'c',
//     views : 100,
//     comments : [
//         {author : 'a', body : 'b'},
//         {author : 'c', body : 'd'},
//     ],
//     islive : true,
// };

// console.log(blogPost);

// 19. Constructor Function
// let blogPost = new Post('a','b','c');
// console.log(blogPost);
// function Post(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }

// 20. Price Range Object
// let priceRanges = [
//     {label : '$', tooltip: 'Inexpensive', minPerPerson : 0, maxPerPerson : 10},
//     {label : '$$', tooltip: 'Moderate', minPerPerson : 11, maxPerPerson : 20},
//     {label : '$$$', tooltip: 'Expensive', minPerPerson :25, maxPerPerson : 50},
// ];
// let restaurants = [
//     {avgPerPerson : 5}

// ];