// in this folder I am going to learn about the file system 
const fs=require('fs');
// fs.writeFileSync('./test.txt','Hey There ');


//Async
// fs.writeFile('./text.txt',"I am using to create the async file by using these file we have a callback were we can track if there is any error available " , (err)=>{ })



// /for readfile 
// const result = fs.readFileSync('./contact.txt',"utf-8");
// console.log(result);


// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result)
//     }
// })



// /append
fs.appendFileSync("./text.txt", `hey There\n`);