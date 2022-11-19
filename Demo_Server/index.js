const express=require('express')
const db=require('./database')
const tr=require('./transactions')
const jwt=require('jsonwebtoken')
const { User } = require('./db')
const cors=require("cors")

// app creation
const app=express()

//to use json
app.use(express.json())

app.use(cors({
    origin:'http://localhost:4200'
}))

const appMiddleware=(req,res,next)=>{
    console.log("application specific middleware");
    next()
}
app.use(appMiddleware)

const jwtmiddleware=(req,res,next)=>{
    try{
        const token=req.headers["access-token"]
        // console.log("TOKEN:",token)
        const data=jwt.verify(token,"supersecretkey@123")
        if(req.body.acno==data.currentacno){
            next()
        }
    }
    catch{
        return{
            statuscode:200,
            status:false,
            msg:"please login"
        }

    }
}

//register api call
app.post('/register',(req,res)=>{
    db.register(req.body.acno,req.body.uname,req.body.password)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

    // const result= db.register(req.body.acno,req.body.uname,req.body.password)
    // if(result){
    //     res.status(result.statuscode).json(result)
    // }else{
    //     res.status(result.statuscode).json(result)
    // }
})
app.post('/login',(req,res)=>{
    db.login(req.body.acno,req.body.password)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
})
})


app.post('/deposit',jwtmiddleware,(req,res)=>{
    tr.depo(req.body.acno,req.body.password,req.body.amount)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })
    
})
app.post('/withdraw',jwtmiddleware,(req,res)=>{
    tr.Withdraw(req.body.acno,req.body.password,req.body.amount)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })
})
app.post('/statement',jwtmiddleware,(req,res)=>{
    tr.tHistory(req.body.acno)
    .then(result=>{
        if(result){
            res.status(result.statuscode).json(result)
        }
    })
})


//resolving http req
app.get('/get',(req,res)=>{
    res.status(400).send('this is get method')
})
app.post('/',(req,res)=>{
    res.send('this is post method')
})



app.listen(3000,()=>{
    console.log("server started in 3000");
})