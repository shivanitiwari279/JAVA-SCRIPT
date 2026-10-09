const marvel_heros = ["Iron man","Hulk","Captain America"]
const dc_heros = ["Superman","Flash","Batman"]
const Spiritual_heros = ["Krishna","Rama","Vishnu"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const all_heros  = marvel_heros.concat(dc_heros,Spiritual_heros)
// console.log(all_heros);

const all_new_heros  = [...marvel_heros,...dc_heros,...Spiritual_heros]
// console.log(all_new_heros);

// HENCE, THE DIFFERENCE BETWEEN "CONCAT()" AND "SPREAD [...ARR1, ...ARR2]" IS THAT "CONCAT()" COMBINES TWO OR MORE ARRAYS,
// THIS METHOD RETURNS A NEW ARRAY WITHOUT MODIFYING ANY EXISTING ARRAYS. WHEREAS THE "SPREAD OPERATOR" EXPANDS THE ELEMENTS 
// OF ARRAYS AND CAN BE USED TO COMBINE TWO OR MORE ARRAYS INTO A NEW ARRAY.


const arr = [1,2,3,[4,5,6],7,[8,9,[10,11,[12]]]]
// console.log(arr.flat(1));
// console.log(arr.flat(2));
// console.log(arr.flat(3));

// HENCE ".FLAT" RETURNS A NEW ARRAY WITH ALL SUB-ARRAY ELEMENTS CONCATENATED INTO IT RECURSIVELY UP TO THE SPECIFIED DEPTH.   

const arr2 = Array.isArray("Shivani")
// console.log(arr2);                                  //Check whether the given argument is an array or not 

const arr3 = Array.from("Shivani")
// console.log(arr3);                               //Creates an array from an iterable object.

const arr4 = Array.from({name: "Shivani"})
// console.log(arr4);      
//INTERESTING CASE , as here we have do define it that whether it has to create an array of keys(name) or directly of 
//values("Shivani") and if it can not create that it'll return the empty array (i.e. :-[])
  
let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3));   //RETURNS A NEW ARRAY FROM A SET OF ELEMENTS.



//const str = new String("")
// console.log(str.toUpperCase());