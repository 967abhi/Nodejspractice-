let a=20;
let b=0;

let waitingData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30); // jo ye resolve hai usme hum kuch bhi daal sakte hai as a array , number ,string anything 
    },2000)
})
waitingData.then((data)=>{
    console.log(a+data);
})