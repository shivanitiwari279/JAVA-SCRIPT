//Objects Constructor (SINGLETON)

// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id ="123abc"
tinderuser.address = "Jbp"
tinderuser.email = "tinderuser@gmail.com"

console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("name"));


const realuser = {
    email : "User@gmail.com",
    fullname:{                                      //nested objects
        username:{
            fastname : "Shivani",
            lastname : "Tiwari"
        }
    }
}

// console.log(realuser.fullname);
// console.log(realuser.fullname);
// console.log(realuser.fullname.username.fastname);

//COMBINING TWO OR MOARE OBJECT

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj3 = {5:"e" , 6:"f"}

// const obj4 = Object.assign({},obj1,obj2,obj3)       //Here "{}" this is the target and (obj1,obj2,..) are sources 
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

// ".assign()" COPY THE VALUES OF ALL OF THE ENUMERABLE OWN PROPERTIES FROM ONE OR MORE SOURCE OBJECTS TO A TARGET OBJECT. 
//RETURNS THE TARGET OBJECT.


//Objects inside the array

const users = [
    user1 ={
        id: "01",
        name : "Sri"
    },

    user2 = {
        id: "02",
        name : "Jammy"
    },

    user3 = {
        id: "03",
        name : "Sammy"
    },
    user4 = {
        id: "04",
        name: "Roze"
    }
]

console.log(users[3].name);
 