require('dotenv').config()
const express = require(`express`)
const cors = require(`cors`) 
const mongoose = require(`mongoose`)
var ObjId = require('mongoose').mongo.BSON.ObjectId;
const User = require('./userModel.js')
const app = express()

app.use(cors())
app.use(express.json())
const port =3001

mongoose.connect(process.env.MONGODB_ACCESS_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("connected to mongodb atlas")
    app.listen(port,()=>{
        console.log(`Node server is running on port ${port}`)
    })        
})
.catch((e)=>{
    console.error(e)
})


app.post(`/login`,async (req,res)=>{
    try{
        const userEntry = req.body        
        const dbEntry= await User.find({username:`${userEntry.username}`})
        console.log('received data from user')
        if(dbEntry==[]){
            console.log('no such username exists')
            return res.status(404).json({"error": "wrong username"})
        }
        if(userEntry.username=== dbEntry[0].username && userEntry.password === dbEntry[0].password){
            console.log("login success");
            return res.status(200).json({"organisationName":`${dbEntry[0].organisationName}`});
        }else{
            console.log('wrong password')
            return res.status(400).json({"error":"wrong password"})
        }
    }catch(err){
        console.log(err)
    }
})

app.post(`/register`,async (req,res)=>{
    try{
        if(await User.findOne({username:`${req.body.username}`})===null){
            console.log('no such username exists, can be registered')
            const user = await User.create(req.body)
            return res.status(200).json(user)
        }else{
            console.log( await User.find({username:`${req.body.username}`}).length)
            console.log('username already taken')
            return res.status(400).json({"error":"username taken"})
        }
        
        
    }catch(err){
        console.log(err)
    }
})


const spawn = require("child_process").spawn;
const windowsPath='D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\scripts\\Scripts\\python'
const ubuntuPath='/home/wsdev88/t/final-org-app/backend/scripts/bin/python'
app.post(`/receive/add`,async (req,res)=>{
    try{
        console.log(`${req.body.name} ${req.body.age} ${req.body.organ} ${req.body.organSize}`)
        const pythonScript = spawn(windowsPath,["./scripts/classifier.py", req.body.organSize,req.body.age]);
        pythonScript.stdout.on("data",(data)=>{
            resultJson=JSON.parse(data.toString())
            console.log(resultJson)
            
           return res.send(resultJson);
        });
        pythonScript.stderr.on('data', (data) => {

            console.log(data.toString())
        });        
        
        
    }catch(err){
        console.log(err.toString())
    }
})
// app.get(`/blogs/get`, async (req,res)=>{
//     try{
//         const blogs=await Blog.find({})
//         res.json(blogs)
//     }catch(e){
//         console.error(e) 
//         console.log(typeof(db))
//     }
// })
