const express=require("express");
const users=require("./MOCK_DATA.json");
const app=express();
const PORT=8000;

 app.get("/api/users",(req,res)=>{
    return res.json(users);
 })

  app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
 })
 app.post("/api/users",(req,res)=>{
    res.json({status:"pending"})
 })
 app.patch("/api/users/:id",(req,res)=>{
    res.json({status:"pending"})
 })
 app.delete("/api/users/:id",(req,res)=>{
    res.json({status:"pending"})
 })

 app.listen(PORT,()=>console.log("server started at port :",PORT));