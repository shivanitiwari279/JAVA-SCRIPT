let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString);

// console.log(mydate.toString());
// console.log(mydate.getDay());
// console.log(mydate.getMonth()+1);
// console.log(mydate.getFullYear());

console.log(mydate.toLocaleString('default',{                 //FOR MORE SPECIFICATION WE USE THS OBJECT FORMAT
    weekday : "long",
    day : "2-digit"
}));

console.log(`Todays date is ${mydate.toLocaleDateString()} and the time is ${mydate.toLocaleTimeString()}`);


let myCreatedDate = new Date(2026,7,4)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2026,8,27,13,30)
// let myCreatedDate2 = new Date("2026-09-27")
// let myCreatedDate2 = new Date("09-27-2026")
// console.log(myCreatedDate2.toLocaleString());

let myTimeSpam = Date.now()
// console.log(myTimeSpam);   
// console.log(myCreatedDate.getTime());                      //CONVERTION OF TIME IN MILISECOND
                                        
// console.log(Math.floor(Date.now()/1000));  

