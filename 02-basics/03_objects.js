//Objects can be declared as literals or via a constructor.

//Singleton: Objects created using a constructor (e.g., Object.create) result in a singleton (a single instance of that object). Object literals do not create singletons.
    
// OBJECTS LITERALS

const JSuser = {
    name : "Shivani",
    "Full name" : "Shivani Tiwari",
    age : 20,
    email : "shivani@gmail.com",
    city : "Jabalpur",
    isLoggedIn : true,
    lastloginDay : ["Monday","Saturday"]
}

console.log(JSuser.name);
console.log(JSuser["name"]);
console.log(JSuser["Full name"]);       // Cannot be accessed using "." method , therefor needed for "["key"]" method
// console.table(JSuser)
