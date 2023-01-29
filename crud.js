const fs=require('fs');
const path=require('path');
const dirPath = path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;
//  isse hum log write file bana sakte haii 
// fs.writeFileSync(filePath,'This is simple text file ')
//read file karenge ye 
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })
   


//  if we have to update any file 
// fs.appendFile(filePath,'and file name is apple.txt ',(err)=>{
//     if(!err) console.log("file is updated ");

// })

//if we have to rename the file 
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is rename ");

// })

//if we have to delete the file 
fs.unlinkSync(`${dirPath}/fruit.txt`)