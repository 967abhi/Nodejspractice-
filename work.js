const fs=require('fs');
// here we are checking how nodejs work 
console.log("1");
//Blocking...
// const result=fs.readFileSync("./contact.txt","utf-8");
// console.log(result);
// console.log("2");



//Non-Blocking Request 
fs.readFile("./contact.txt","utf-8",(err,result)=>{
    console.log(result);
})
console.log("2");