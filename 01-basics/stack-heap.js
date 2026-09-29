//  STACK (PRIMITIVE DATA TYPE)  

let name = "Shivani"
let otherName = name 
otherName = "Tiwari"

console.log(name);
console.log(otherName);


/*
    ACTION : Here we can see that at first we have asing the value to the first variable "name" was "Shivani" afterwards we 
    have take another variable viz "othername" which  afterwards assign the valse of name and then we have change the
    "othername"  value as "Tiwari". But when we print "name" it dosen't show the change and return the value which has 
    initially assigned to it.

    REASON : It's beacuse in "STACK" it onle give copy value and do not change the initial value .
*/


//  HEAP (NON-PRIMITIVE DATA TYPE) 

let userOne={
    email : "userOne@gmail.com",
    password : 1235
}

let userTwo = userOne

userTwo.email= "userTwo@gmail.com"

console.log(userOne);
console.log(userTwo);


/*
    ACTION : Here we can see that at first we have assing the value to first obj "userOne" was "email" & "password" afterwards
    we have take another obj viz "userTwo" which afterwards assign the valse of "userOne" and then we have change the "userTwo" 
    email as "userTwo@gmail.com". But when we print "userOne" it show the change and return the value which has after 
    assigned to it.

    REASON : It's beacuse in "HEAP" it works on the "taking reference" form. As if  we'll change any of the value other would have
    change by its own as both are taking same refernce.
*/