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
        if(dbEntry===[]){
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
        if(await User.find({username:`${req.body.username}`})===[]){
            console.log('no such username exists, can be registered')
            const user = await User.create(req.body)
            return res.status(200).json(user)
        }else{
            console.log('username already taken')
            return res.status(400).json({"error":"username taken"})
        }
        
        
    }catch(err){
        console.log(err)
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
