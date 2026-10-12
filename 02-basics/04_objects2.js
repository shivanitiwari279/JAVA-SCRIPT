//Objects Constructor (SINGLETON)

// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id ="123abc"
tinderuser.address = "Jbp"

// console.log(tinderuser);

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
// console.log(realuser.fullname.username);
// console.log(realuser.fullname.username.fastname);

//COMBINING TWO OR MOARE OBJECT

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

// ".assign()" COPY THE VALUES OF ALL OF THE ENUMERABLE OWN PROPERTIES FROM ONE OR MORE SOURCE OBJECTS TO A TARGET OBJECT. 
//RETURNS THE TARGET OBJECT.
