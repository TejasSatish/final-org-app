require('dotenv').config()
const express = require(`express`)
const cors = require(`cors`) 
const fs = require('fs');
const mongoose = require(`mongoose`)
var ObjId = require('mongoose').mongo.BSON.ObjectId;
const User = require('./userModel.js');
const app = express()
const path= require('path');
const { error } = require('console');

app.use(cors())
app.use(express.json())

app.use(express.static(path.resolve(__dirname, '../frontend/build')));
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

app.get("/*",(req,res)=>{
    
    res.sendFile(
        path.resolve(__dirname,'../frontend/build/index.html'),
        function (err){
            if(err){
                res.status(500).send(err)
            }
        }
    )
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

app.post(`/donate/add`,async (req,res)=>{
    try{
        let id=req.body.id
        let name=req.body.name
        let age=req.body.age
        let gender=req.body.gender
        let locality=req.body.locality
        let bloodtype=req.body.bloodtype
        let tissuetype=req.body.tissuetype
        let organ=req.body.organ
        let size=req.body.organSize

        const donor={
            'id':id,
            'name':name,
            'age':age,
            'gender':gender,
            'locality':locality,
            'bloodtype':bloodtype,
            'tissuetype':tissuetype,
            'organ':organ,
            'size':size
        }
        //const matchJson= 
        
        //const pythonScript = spawn(windowsPath,["./scripts/classifier.py",id,name,organ,locality,bloodtype,tissuetype,gender,age,size,"recipient"]);
        const pythonScript = spawn(windowsPath,["./scripts/classifier.py",id,name,organ,locality,bloodtype,tissuetype,gender,age,size,"donor"],{cwd: __dirname});
        pythonScript.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        
        return res.send("successfully processed by script, and cluster identified")
        
    }catch(err){
        console.log(err.toString())
    }
})

app.post(`/receive/add`,async (req,res)=>{
    try{
        let id=req.body.id
        let name=req.body.name
        let age=req.body.age
        let gender=req.body.gender
        let locality=req.body.locality
        let bloodtype=req.body.bloodtype
        let tissuetype=req.body.tissuetype
        let organ=req.body.organ
        let size=req.body.organSize

        const recipient={
            'id':id,
            'name':name,
            'age':age,
            'gender':gender,
            'locality':locality,
            'bloodtype':bloodtype,
            'tissuetype':tissuetype,
            'organ':organ,
            'size':size
        }
        //const matchJson= 
        const pythonScript = spawn(windowsPath,["./scripts/classifier.py",id,name,organ,locality,bloodtype,tissuetype,gender,age,size,"recipient"],{cwd: __dirname});
        
        //gets result json from python script
        const queryResultJson=JSON.parse(fs.readFileSync("./assets/match.json", 'utf8'));
        
        recipient['matches']=queryResultJson
        // opens results.json and appends new recipient as key with results as value
        fs.readFile('./results.json', (err,data)=> {
            let json = JSON.parse(data)
            
            json.table.push(recipient)

            fs.writeFile("results.json", JSON.stringify(json),'utf8',()=>{})
        })
        // const matchson=JSON.parse(fs.readFileSync("./assets/match.json", 'utf8'));
        return res.send("successfully processed by py script, and results found")
        
    }catch(err){
        console.log(err.toString())
    }
})

app.get(`/receive/matches`, async (req,res)=>{
    try{
        fs.readFile('./results.json', (err,data)=> {
            let allMatches = JSON.parse(data)
            res.status(200).json(allMatches)
        })
    }catch(e){
        console.error(e) 
        console.log(typeof(db))
    }
})

/**
 * TO DO
 * FRONTEND: add drop down fields
 * SMART CONTRACT: compile and deploy, replace ABI and contract address
 * BACKDEND:check everything works
 */