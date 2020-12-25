const express = require('express')
const data=require('./mock/data.json')
const app=express()
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.get('/api/getDetailById',(req,res)=>{
    res.json(data["getDetailById"])
})
app.listen(3000,()=>{
    console.log("服务启动成功")
})