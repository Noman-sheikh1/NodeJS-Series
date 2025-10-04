const express=require("express");
const users=require("./MOCK_DATA.json");
const app=express();
const fs=require("fs");
const PORT=8000;

app.use(express.urlencoded({extended:false}));
app.use(express.json()); 


// Middleware 1: Logger
app.use((req, res, next) => {
    console.log('Middleware 1: Request received at ' + new Date());
    next();
});

// Middleware 2: Add custom property
app.use((req, res, next) => {
    req.username = "Noman";   // adding data to request
    console.log("Middleware 2: Added username to request");
    next();
});

// Route Handler
app.get('/', (req, res) => {
    res.send(`Hello, ${req.username}`);
});

// Middleware 3: Error handling (example)
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).send("Something went wrong!");
});




 app.get("/api/users",(req,res)=>{
  const userAgent = req.headers['user-agent'];   //  request header
    res.send(`Your User-Agent is: ${userAgent}`);
  // res.setHeader("x-name","noman");//setting coustom header
  
  //   return res.json(users);
 })

  app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
 })
 app.post("/api/users",(req,res)=>{
    const body=req.body;
  
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users,null,2),(err,data)=>{
        return  res.json({status:"sucess",id:users.length})
    })
   
 })
 app.patch("/api/users/:id",(req,res)=>{
    const  body=req.body;
    console.log(body);
    const id=Number(req.params.id);
    const userIndex=users.findIndex((user)=>user.id==id);
    if(userIndex===-1){
        res.status(404).json({message:"user not found"});
    }
   users[userIndex] = { ...users[userIndex], ...body };
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) return res.status(500).json({ error: "Error writing file" });
    res.json({ status: "success", user: users[userIndex] });
  });
 })
 app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  // Remove user
  const deletedUser = users.splice(userIndex, 1);

  // Save back to file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) return res.status(500).json({ error: "Error writing file" });
    res.json({ status: "success", deletedUser });
  });
});




 app.listen(PORT,()=>console.log("server started at port :",PORT));