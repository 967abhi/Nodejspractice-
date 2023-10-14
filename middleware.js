app.use(express.urlencoded({extended:false}))

app.use((req,res,next)=>{
    //next is pointend to route
    console.log("Hello from middleware1");
    // return res.send({mgs:"Hello From Middelware1"})
    // req.myUserName="Abhishek Kumar Singh "
    // console.log('Time:',Date.now());
    next();
})
app.use((req,res,next)=>{
    console.log("Hello From Middleware 2 ");
})