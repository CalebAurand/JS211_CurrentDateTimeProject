// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

let a = 5;
let b = '2';
console.log(a.toString());
console.log(parseInt(b));



// Write a JavaScript program to convert a string to the number.
  //b was declared above and should be converted to the number 2
function numberify(string){
  console.log(parseInt(string));
}
numberify(b);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
 let a1 = true; // * Boolean
 let b1 = null; // * Null
 let c1 = undefined; // * Undefined
 let d1 = 5; // * Number
 let e1 = NaN; // * NaN
 let f1 = 'hello'; // * String

 const whatsThis = (thing) =>{
   let answer = typeof(thing);
   return console.log(answer);
 }
 whatsThis("this is a: ", a1);
 whatsThis("this is a: ", b1);
 whatsThis("this is a: ", c1);
 whatsThis("this is a: ", d1);
 whatsThis("this is a: ", e1);
 whatsThis("this is a: ", f1);
  
// Write a JavaScript program that adds 2 numbers together.
function addThem(num1, num2) {
  //define variable sum store result of num1 added to num2
  sum = num1 + num2;
  console.log("The sume of the two numbers is : " + sum);
  //log and then return the result
  return sum;
}

addThem(3, 4);

console.log("the answer to the addition of 12 and 29 is: "+ addThem(12, 29));


// Write a JavaScript program that runs only when 2 things are true.
let notTrue = false;
let notTrue2 = false;
let oneTrue = true;
let twoTrue = true;

const alsoTruth = (thing1, thing2) =>{
  if(thing1 === true && thing2 === true){
    return console.log("Thing1 and Thing2 are true, and this program has run.")
  };
};
alsoTruth(oneTrue, twoTrue);


// Write a JavaScript program that runs when 1 of 2 things are true.

const semiTruth = (thing1, thing2) => {
  if(thing1 === true || thing2 === true){
    return console.log("Thing1 or Thing2 are true, and this program has run.")
  }
};

semiTruth(notTrue, oneTrue);

// Write a JavaScript program that runs when both things are not true.  



const falseRunner = (thing1, thing2) =>{
  if(thing1 != true && thing2 != true) {
    console.log("Thing1 and Thing2 are false, and this program has run.")
  }
}

falseRunner(notTrue, notTrue2);