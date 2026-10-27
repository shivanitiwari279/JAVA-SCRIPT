
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

console.log(LoginUserMessage());             
// if it has written like ("") this it will return nothing but if like() htis it will retuen "undefined". 

// IF WE WAN T TO AVOID THESE KIND OF CONFLICTS WE CAN DIRECTLY GIVE THE SOME VALUES WHERE WE HAVE DECLARED THE PARAMETER
// I.E. "(username = "Sam")"