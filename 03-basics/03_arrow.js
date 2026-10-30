const user ={
    username :"Shivnai",
    userID :1234,

    WelcomeMessage : function() {
        console.log(`${this.username} , Welcome to this website!`);       //THIS : REFERS TO THE CURRENT CONTEXT(VALUE/ABOUT)
        console.log(this);
           
    }

}

// user.WelcomeMessage()
// user.username = "Sri"
// user.WelcomeMessage()

// console.log(this);

//NOTE: The global object inside the browser is "WINDOW OBJECT"

// function one() {
//     let name = "Shivani"
//     console.log(this.name);   //THIS keyword cannot be accessable for "funtions" it can be accessed only inside the "objects"
// }
// one()



//DECLARING FUNTIONS THROUGH ARROW FUNTIONS

// const user1 = function () {
//     let name = "Shivani"
//     console.log(this.name);
// }

// const user1 = () => {                   // for creating arrow funtions all we have to do is removing that function key word and
//                                         // put "=>" aside the "()" and here the arrow function is created
//     let name = "Shivani"
//     console.log(this.name);
// }

// user1()


//PURE ARROW FUNCTIONS

// Basic syntext of arrow function is "() => {}"

// const addTwo = (num1 , num2) => {         //EXPLICIT RETURN(Curly braces {} → Write return if you want to return a value.)
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => (num1+num2)     //IMPLICIT RETURN(No curly braces → The expression is returned automatically.)

const newUser = () => ({username : "Shivani"})  // for returing object
console.log(newUser());
 