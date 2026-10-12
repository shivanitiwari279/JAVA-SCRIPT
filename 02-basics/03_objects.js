//Objects can be declared as literals or via a constructor.

//Singleton: Objects created using a constructor (e.g., Object.create) result in a singleton (a single instance of that
//object).Object literals do not create singletons.
    
// OBJECTS LITERALS

const mySym = Symbol("key1")
const JSuser = {
    name : "Shivani",
    "Full name" : "Shivani Tiwari",
    [mySym] : "mykey1",
    age : 20,
    email : "shivani@gmail.com",
    city : "Jabalpur",
    isLoggedIn : true,
    lastloginDay : ["Monday","Saturday"]
}

// console.log(JSuser.name);
// console.log(JSuser["name"]);
// console.log(JSuser["Full name"]);       // Cannot be accessed using "." method , therefor needed for "["key"]" method
// console.table(JSuser)
// console.log(typeof [mySym]);            // Symbol can be only represent using "[]" 

//for changing values 

JSuser.email = "shivanitiwari@gamil.com"

//for freezing the values means if we want to that the value of given key should not change in any case that we can 
// freez them

// Object.freeze(JSuser)
// JSuser.email = "shivanitiwari1234@gamil.com"
// console.log(JSuser);

//for declaring funtions 

JSuser.greeting = function() {
    console.log("hello js users!");   
}

JSuser.greetingtwo = function() {
    console.log(`Hello JS users , this is ${this["Full name"]}`);   
}

console.log(JSuser.greeting());
console.log(JSuser.greetingtwo());
