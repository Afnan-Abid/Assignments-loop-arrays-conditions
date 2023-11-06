/*Question 1

let number = +prompt("Enter a number:");
if (number % 3 === 0) {
alert(number + " is divisible by 3.");
}    else {
  alert(number + " is not divisible by 3.");
}*/

/*Question 2 

let number = +prompt("Enter a number:");
if (number % 2 === 0) {
  alert(number + " is an even number.");
} else {
alert(number + " is an odd number.");
}*/


/*Question 3 

let checkAge = +prompt ("Enter your number");
if (checkAge >= 18) {
  alert("Old Enough");
} else {
  alert("Too Young");
}*/

/* Question 4 

let userName = prompt("Enter your name:");
let yourName = "Rafay"; 

if (userName === yourName) {
  alert("Hello, " + userName + "! You have the same name as me.");
}else{
    alert("Sorry")
}*/

/* Question 5 

let number = +prompt("Enter a number:");
if (number % 3 === 0) {
alert(number + " is divisible by 3.");
}    else {
  alert(number + " is not divisible by 3.");
}*/

/* Question 6 
let character = prompt("Enter a character:");
let codes = character.charCodeAt(0);

if (codes >= 48 && codes <= 57) {

  alert("The input is a number.");

} else if (codes >= 65 && codes <= 90) {

  alert("The input is an uppercase letter.");

} else if (codes >= 97 && codes <= 122) {

  alert("The input is a lowercase letter.");
} else {
  alert("The input is not a number, uppercase letter, or lowercase letter.");
}*/
//Question 7 //

/*let num1 = +(prompt("Enter the first number:"));
let num2 = +(prompt("Enter the second number:"));
let operator = prompt("Enter the operator");

if (operator === "+") {
} else if (operator === "-") {
} else if (operator === "*") {
} else if (operator === "/") {
  if (num2 === 0) {
  } else {
  }
} else if (operator === "%") {
  
} else {
}
console.log(operator)*/

/*Question 9 

let year = +(prompt("Enter a year"));


if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  alert(" is a leap year.");
} else {
  alert(" is not a leap year.");
}*/

/* Question 10 

let password = "Hello";
let userClick = prompt("Enter password");

if (userClick === password) {
  alert("The password is Correct");
}else {
  alert("Incorrect password");
}*/

/*Question 11 

let firstNames = "Ali";

if (firstNames === "Fahad") {
  console.log("Hello Fahad");
} else {
  console.log("You are not Fahad");
}*/

/* Question 12 

let greeting;
let hour = +prompt("Enter the hour (0-23):");

if (hour < 18) {
greeting = "Good Day";
} else {
greeting = "Good Evening";
}

console.log(greeting);*/


/* Question 13 


let num1 = Number(prompt("Enter the first integer:"));
let num2 = Number(prompt("Enter the second integer:"));

if (num1 === num2) {

  console.log("The two integers are equal.");

} else if (num1 > num2) {

  console.log("The larger integer is " + num1 + ".");

} else {
    
  console.log("The larger integer is " + num2 + ".");
}*/

/* Question 14 

let number = Number(prompt("Enter a number:"));

if (number > 0) {

  console.log("The number is positive.");
} else if (number < 0) {


  console.log("The number is negative.");
} else {


  console.log("The number is zero.");
}*/


/* Question 15 

let hours = +prompt("Enter hour");

if (hours === 6 || hours === 9) {
  console.log("Breakfast is served")
}else if (hours === 11 || hours === 13) {
  console.log("Time for Lunch")
}else if (hours === 5 || hours === 8) {
  console.log("It's dinner time")
}else {
  console.log("Sorry, you have to wait or go get a snack")
}*/

/*Question 16 
let checkData = true;

if (checkData === undefined) {

  console.log("The variable is 'undefined'");
} else if (checkData === true || checkData === false) {
  console.log("The variable is of type 'boolean'");

} else if (!isNaN(checkData)) {
  
  console.log("The variable is of type 'number'");
} else if (checkData === 'string' || String(checkData) === 'string')
 {
  console.log("The variable is of type 'string'");
} else {
  console.log("The variable is of an unexpected type");
}*/


/*Question 17

let character = prompt("Enter a character:")
character = character.toLowerCase()
if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
  console.log("True, it is a vowel")
} else {
  console.log("False, it is not a vowel")
}*/

/*Question 18 

if (10 !== 8) {
    console.log("True");
  }*/

// Question 19 //
/*let month = +prompt("Enter your month")

if (month === 1) {
  alert("January");
}else if (month === 2) {
  alert("February");
}else if (month === 3) {
  alert("March");
}else if (month === 4) {
  alert("April");
}else if (month === 5) {
  alert("May");
}else if (month === 6) {
  alert("June");
}else if (month === 7) {
  alert("July");
}else if (month === 8) {
  alert("August");
}else if (month === 9) {
  alert("September");
}else if (month === 10) {
  alert("October");
}else if (month === 11) {
  alert("November");
}else if (month === 12) {
  alert("December");
}else {
  alert("Invalid month");
}
console.log(month)*/

/* Question 20 
let age = +prompt ("Enter your age");
if(age < 18){
  alert("Too young")
}else{
  alert("old enough")
}*/



// Arrays Files //


/* Question 1 
let studentNames = [];*/


/* Question 2 

let studentNames = [];*/


/* Question 3 

let fruits = ["Apple", "grapes", "orange", "watermelon", "mango"]
console.log("")*/

/* Question 4 

let numbers = [1, 2, 3, 4, 5]
console.log()*/

/* Question 5 

let booleanArray = [true, false, true, true, true]
console.log()*/

/* Question 6 


let mixedArray = ["Apple", 72 , false , "Mango", 50 , true]
console.log()*/


/*Question 7 

let mobileNetworks = ["Mobilink", "Telenor", "Zong", "Ufone", "Warid"]
console.log("")*/


/*Question 8 

let education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS" ,"M.PHIL", "PHD"]
document.write(education)*/

/* Question 9 

let topMovies2015 = [];

topMovies2015.push("Jurassic World");
topMovies2015.push("Spectre");
topMovies2015.push("Avengers: Age of Ultron");
topMovies2015.push("Inside Out");

document.write(topMovies2015)*/

/* Question 10 
let carShows = ["Audi", "Volvo", "Ford", "Lamborghini"]
 let   firstShowIndex = 0;
let firstCarShow = carShows[firstShowIndex]
let   lastShowIndex = carShows.length - 1;

console.log  ("First index of the array: " + firstShowIndex)
  console.log  ("Car show at the first index: " + firstCarShow)
console.log ("Last index of the array: " + lastShowIndex)
   console.log  "Car at the last index of the array: " + carShows[lastShowIndex]);*/

/* Question 11 

let studentNames = ["Michael", "david", "John"];
let studentScores = [320, 400, 450];

for (let i = 0; i < studentNames.length; i++) {
  let name = studentNames[i];
  let score = studentScores[i];
  let totalMarks = 500; 
  let percentage = (score / totalMarks) * 100;
  
  console.log("Score of " + name + " is " + score + " and percentage is " + percentage.toFixed(2) + "%")
}*/

/*Question 13 

let studentScores = [250, 450, 400];
let names = studentNames
console.log("Score of" + names)*/

/*Question 14 

let fruits = ["strawberry", "apple", "orange", "banana"];

fruits.sort();
console.log("Ordered fruit list " + fruits);*/


/* Question 15 

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

let selectedCities = [];
selectedCities = cities.slice(2, 4); 

console.log("Selected Cities:", selectedCities);*/

/* Question 16 

let lines = ["This", "is", "my", "cat"];
let result = lines.join(" ");
console.log(result);*/

/*Question 17 

let fifoArray = [];

fifoArray.push("Keyboard");
fifoArray.push("mouse");
fifoArray.push("Printer");
fifoArray.push("monitor");

let firstValue = fifoArray.shift(); 
let secondValue = fifoArray.shift(); 
let thirdValue = fifoArray.shift(); 

console.log("out: " + firstValue);
console.log("out: " + secondValue);
console.log("out: " + thirdValue);
console.log("out: " + thirdValue);*/

/* Question 18

let lifoArray = [];

lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");

let firstValue = lifoArray.pop(); 
let secondValue = lifoArray.pop(); 
let thirdValue = lifoArray.pop(); 
let fourthValue = lifoArray.pop();

console.log("Out: " + firstValue);
console.log("Out: " + secondValue);
console.log("Out: " + thirdValue);
console.log("Out: " + fourthValue);*/


// Question 19 //


/*Question 20

let multiDimArray = [];*/




//For Loops //

/*Question 1


let data = document.querySelector(".container")

for (let i = 0; i < 5; i++) {
  data.innerHTML += "Hello, World!<br>"
}*/


/*Question 2 
let data = document.querySelector(".container1")

for (let i = 1; i <= 10; i++) {
  data.innerHTML += i + "<br>"
}*/


 /*Question 3 

    function printTable() {

      let input = Number(document.querySelector("#table").value);
      let data = document.querySelector(".container2")
      data.innerHTML = ""

      for (let i = 1; i <= 15; i++) {
        data.innerHTML += input + " x " + i + " = " + input * i + "<br>"
      }
    }*/



/* Question 4 



let data = document.querySelector(".container3")

let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]

for (let i = 0; i < A.length; i++) {
  data.innerHTML += A[i] + "<br/>"
}*/




/* Qustion 5 

let data = document.querySelector(".container4")
let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
for (let i = 0; i < fruits.length; i++) {
  data.innerHTML += fruits[i] + "<br/>"
}

data.innerHTML += "Element at index 0 is " + fruits[0] + "<br/>"
data.innerHTML += "Element at index 1 is " + fruits[1] + "<br/>"
data.innerHTML += "Element at index 2 is " + fruits[2] + "<br/>"
data.innerHTML += "Element at index 3 is " + fruits[3] + "<br/>"
data.innerHTML += "Element at index 4 is " + fruits[4] + "<br/>"
data.innerHTML += "Element at index 5 is " + fruits[5] + "<br/>";*/


/*Question 6 

let N = ["Keyboard" , "Mouse" , "flash drive" , "cpu"]

let items = prompt("Enter the number of items:")

for (let i = 0; i < items; i++) {
  let item = prompt("Enter item " + (i + 1))
  N.push(item)
}

console.log("Array of items:", N);*/


/* Question 9 

let data = document.querySelector(".container9");

let A = [24, 55, 78, 59, 88, 90];
let largestNumber = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] > largestNumber) {
    largestNumber = A[i];
  }
}

data.innerHTML = "The largest number in the array is: " + largestNumber;*/

/*Question 10 

let data = document.querySelector(".container10");

let A = [24, 55, 78, 59, 88, 90];
let smallestNumber = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] < smallestNumber) {
    smallestNumber = A[i];
  }

}

data.innerHTML = "The smallest number in the array is: " + smallestNumber;*/


/* Question 11 

let data = document.querySelector(".container11");

let A = [24, 55, 78, 59, 88, 90];
let smallestNumber = A[0];
let largestNumber = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] < smallestNumber) {
    smallestNumber = A[i];
  }
  if (A[i] > largestNumber) {
    largestNumber = A[i];
  }
}

data.innerHTML = "The smallest number in the array is: " + smallestNumber + "<br>";
data.innerHTML += "The largest number in the array is: " + largestNumber;*/



/* Question 12



for (let i = 1; i <= 20; i++) {

  let multipleOf5 = i * 5;

  console.log(multipleOf5);
}*/


/* Question 13 

let data = document.querySelector(".container13");
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

for (var i = 0; i < students.length; i++) {
  data.innerHTML += students[i] + ": " + scores[i] + "<br>";
}*/





/*Question 15 

let data = document.querySelector(".container15");
let A = [[123], [456], [789]];

for (let i = 0; i < A.length; i++) {

  for (let j = 0; j < A[i].length; j++) {

    data.innerHTML += A[i][j] + "<br>";
  }
}*/

//Question 16 //


/*Question 17 

let data = document.querySelector(".container17");

for (let i = 0; i <= 20; i++) {

  if (i % 2 === 0) {

    data.innerHTML += i + " is even" + "<br>";
  } else {

    data.innerHTML += i + " is odd" + "<br>";
  }
}*/


/*Question 18 
let product = 1;
for (let i = 1; i <= 7; i += 2) {
  product *= i;
}
console.log("The product of odd integers from 1 to 7 is: " + product);*/





























































































































































































  

































































































































