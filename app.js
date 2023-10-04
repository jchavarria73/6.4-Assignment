const person = {    // Object
  firstName: "Jose",
  lastName: "Chavarria",
  age: 20,
  eyeColor: "brown"
};
    
document.getElementById("object").innerHTML =
person.firstName + " is " + person.age + " years old.";
  
const singer = {
  firstName: "Michael",
  lastName: "Jackson",
  id: 5566,
  fullName: function() {    // Object Method
    return this.firstName + " " + this.lastName;
  }
};
    
document.getElementById("objectmethod").innerHTML = singer.fullName();
  
const actor = {
  firstName: "Tom",
  lastName: "Holland",
  id: 1234,
};
actor.name = function() { // Adding a Method to an Object
  return this.firstName + " " + this.lastName;
};
  
document.getElementById("addmethod").innerHTML =
"My favorite movie actor is " + actor.name(); 
  
const basketball = {
  firstName: "Tim",
  lastName: "Duncan",
  id: 2121,
};
basketball.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();  // Using Built-In Methods to an Object
};
  
document.getElementById("builtinmethod").innerHTML =
"My favorite basketball player is " + basketball.name(); 
  
const breakfast = ["Pancakes", "Scrambled Eggs", "Bacon", "Sausage", 
"Hash Browns", "Toast", "Orange Jucie"];  // Array
document.getElementById("array").innerHTML = breakfast;
  
const continents = ["North America", "South America", "Europe", "Asia",
"Africa", "Antartica", "Australia"];
let size = continents.length; // Array Method: Length
document.getElementById("length").innerHTML = size;
  
const icecream = ["Vanilla", "Chocolate", "Strawberry", "Cookies N' Cream",
"Mint Chocolate Chip"];
document.getElementById("push1").innerHTML = icecream;
icecream.push("Cookie Dough");  // Array Method: push()
document.getElementById("push2").innerHTML = icecream;
  
const holiday = ["Christmas", "Thanksgiving", "Halloween", "Valentine's Day"]; 
document.getElementById("pop1").innerHTML = holiday;
holiday.pop(); // Array Method: pop()
document.getElementById("pop2").innerHTML = holiday;

// 6.1 Video Lesson: Arrays
const schedule = ["Wake up", "Eat", "Film a video", "Watch things on netflix"];

console.log(schedule[3]);

console.log(schedule.indexOf("Eat"));

const film = schedule.indexOf("Film a video");

console.log(film);

console.log(schedule[film]);

// 6.2 Video Lesson: Objects and Key Words
const user = {
  name: "Jose",
  age: 21,
  married: false,
  purchases: ["phone", "car", "laptop"],

  sayName: function() {
    console.log(this.name);
  }
};

user.sayName();

function saymyAge() {
  console.log(`My age is ${this}`);
}

saymyAge();

function apples() {
  console.log("apple");
}

console.log(user.purchases);

//THIS
window.apples();

console.log(this);