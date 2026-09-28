"uase strict"; // treat all JS code as newer version 

// alert(3+6) // We are using "nodejs", not "browser"

//DATA TYPES

let name="Shivani"
let age=20
let is18pluse= true
console.table([name,age,is18pluse])
/* 
    PRIMITIVE DATATYPES:

  1.  number => 2 to power 53
  2.  bigint =>(when number go out of the range of 2^53)
  3.  sting => ""
  4.  boolean => true/false
  5.  null => standalone value 
  6.  undefined => (something taht is declared but not yet defined)
  7.  symbol => (for uniqueness) 

*/

// console.log(typeof "Shivani");
// console.log(typeof age);
// console.log(typeof null);
// console.log(typeof undefined);

/*
    NON-PRIMTIVE/REFERENCE DATATYPES:

  1.  Array
  2.  Object
  3.  Function
*/

//ARRAY
const heros = ["Iron man","Hulk","Thor","Caption America"]
console.log(heros);


//OBJECTS
let myObj={
    name:"Shivani",
    age:20,
    city:"Jabalpur"
}

//FUNCTION
const myFunction = function () {
    console.log("Hello World!");
    
}
myFunction()

/*
| Category      | Data Type   | Example                | `typeof` Result |
| ------------- | ------------| -----------------------| --------------- |
| Primitive     | String      | "Hello"                |  "string"       |
| Primitive     | Number      | 10,10.5                |  "number"       |
| Primitive     | BigInt      | 12345678901234567890n  |  "bigint"       |
| Primitive     | Boolean     | true, false            |  "boolean"      |
| Primitive     | Undefined   | let x;                 |  "undefined"    |
| Primitive     | Null        | null                   |  "object"       |
| Primitive     | Symbol      | Symbol("id")           |  "symbol"       |
| Non-Primitive | Object      | {name: "Shivani"}      |  "object"       |
| Non-Primitive | Array       | [10, 20, 30]           |  "object"       |
| Non-Primitive | Function    | function add(){}       |  "function"     |
| Non-Primitive | Date        | new Date()             |  "object"       |
| Non-Primitive | RegExp      | /abc/                  |  "object"       |
| Non-Primitive | Map         | new Map()              |  "object"       |
| Non-Primitive | Set         | new Set()              |  "object"       |
| Non-Primitive | WeakMap     | new WeakMap()          |  "object"       |
| Non-Primitive | WeakSet     | new WeakSet()          |  "object"       |
| Non-Primitive | Promise     | new Promise(...)       |  "object"       |
| Non-Primitive | Error       | new Error()            |  "object"       |

*/