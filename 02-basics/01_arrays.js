
//  ARRAY

const arr = [1,2,3,4,5]
const heros = ["Iron man","Hulk", "Captain America","Thor"]
const arr2= new Array(3,4,6,9,5)

// console.log(typeof arr);
// console.log("A:" , arr);
// console.log(arr[3]);
// console.log(heros[2]);
// console.log(arr2);


//  ARRAY METHODS
 
arr.push(78)
arr.push(8)
arr.pop()
console.log(arr);
console.log( arr.at(4));
console.log( arr.indexOf(20));
console.log(arr.length);

arr.unshift(6)                 //Difference b/w PUSH and UNSHIFT is that PUSH adds the values in the end of the array  
// console.log(arr);              //whereas UNSHIFT adds the values in the beginning of the array !
arr.shift()                    //Difference b/w POP and SHIFT is that POP removes the values from the end of the array 
// console.log(arr);              //whereas SHIFT removes the values from the beginning of the array!                            


const newarr = arr.join()        //".join" use to convert the arrya in the string  
// console.log(typeof newarr);
// console.log(newarr);


console.log("After using slice:", arr.slice(2,4));
console.log("B:" , arr);

console.log("After using splice:", arr.splice(2,4));
console.log("C:" , arr);

// HENCE THE MAJOR DIFFERNCE BETWEEN SLICE AND SPLICE IS THAT "SLICE" IT RETURNS A COPY OF A SECTION OF AN ARRAY BUT
//  IN "SPLICE" IT REMEMOVES ELEMENTS FROM AN ARRAY 