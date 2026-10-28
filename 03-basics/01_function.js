
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("I");
}

// sayMyName()

function addTwoNumbers(num1 , num2) {
    // console.log(num1+num2);   
    // let result = num1+num2
    // return result
    return num1+num2
}

const result=addTwoNumbers(31,85)
// console.log("Result:",result);

function LoginUserMessage(username = "Sam") {
    if (!username) // !username is as equals to username === undefined
    {
        console.log("Please enter a username");
        return
    }
    else{
        return `${username} has just logged in!`
    }
    
}

// console.log(LoginUserMessage());             
// if it has written like ("") this it will return nothing but if like() htis it will retuen "undefined". 

// IF WE WAN T TO AVOID THESE KIND OF CONFLICTS WE CAN DIRECTLY GIVE THE SOME VALUES WHERE WE HAVE DECLARED THE PARAMETER
// I.E. "(username = "Sam")"

//********REST OPERATOR(...) *********//
// REST OPERATOR(...) is used to collect multiple values into a single array or object.

function CalculateCartPrice(...num1) {             
    return num1
}

// console.log(CalculateCartPrice(100,200,3000,400));

//Rest Operator: Collects multiple values into a single array or object.
//Spread Operator: Expands elements of an array or properties of an object.


// HANDLING OBJECTS IN FUNCTIONS 

const user = {
    username : "Shivani",
    userID : 1234
}

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.username} and their ID is ${anyObject.userID}`);
}

// handleObject(user)
// handleObject({                            // CAN PASS THE VALUES DIRECTLY FROM HERE 
//     username : "Selene",
//     userID : 4321
// })

// HANDLING ARRAYS IN FUNCTIONS     

const myArray = [100,200,300,400]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([500,600,700,800]));
 