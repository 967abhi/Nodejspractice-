const express=require('express')
const app=express();
app.get('',(req,res)=>{
    console.log(" the data come from brower ", req.query.name);
    res.send(
        `<h1>hello,  welcome to home page </h1>
        <a href='/about'>go to about page</a>
    `);

})
app.get('/display',(req,res)=>{
    res.send({
        name:'abhishek',
        email:'abhishek@gmail.com'
    });
})
app.get('/about',(req,res)=>{
    res.send(` <input type="text" placeholder="write something"/>
    <button> submit </button>
    <a href='/'>go to home page </a>
    `);
})
app.listen(4000);