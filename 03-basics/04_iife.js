// Immediately Invoked Function Expression (IIFE)
//PURPOSE : 
//Database Connection: Used to run initialization code, such as establishing database connections, as soon as an application starts.
//Avoiding Global Scope Pollution: Functions and variables defined inside an IIFE remain local, preventing them from interfering with or being polluted by the global scope.

//we use IIFE for protecting from global scope pollution 


// function name() {
//     console.log("Shivani Tiwari");
// }
// name()

// DECLARATING OF IIFE ["()()"]

(function name() {
    console.log("Shivani Tiwari");
})();

//USING ARROW FUNCTION

((name) => {
    console.log(`Welcome to website, ${name}! `);  
})("Shivani")