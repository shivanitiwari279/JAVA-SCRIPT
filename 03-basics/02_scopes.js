// GLOBAL SCOPES:A variable declared outside any function or block has global scope. 
// It can be accessed from different parts of your code.
let name = "Shivani"
const age = 20

function greet() {
    console.log(name);
    console.log(age);
}

greet();

console.log(name);
console.log(age);

//BLOCK SCOPE:A block is a piece of code enclosed within curly braces { }, such as an if statement or a for loop.
//Variables declared using let and const inside a block can only be accessed within that block.

if (true) {
    let a = 10               
    const b= 20

    // console.log(a) 
    // console.log(b) 
}

// console.log(a)      //They cannot be accessed outside the block.
// console.log(b)


//FUNCTION SCOPE: A variable declared using var, let, or const inside a function can be accessed within that function,
// but not from outside it.

// function greet() {
//     let name = "Shivani";
//     console.log(name);
// }

// greet();

//console.log(name);  //CAN NTO BE ACCESSED 
