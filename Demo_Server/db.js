const mongoose=require('mongoose')


//state connection string
mongoose.connect('mongodb://localhost:27017/bankappDemo',{useNewUrlParser:true})


//model creation
const User=mongoose.model('User',{
    acno:Number,
    name:String,
    password:String,
    balance:Number,
    transaction:Array

})

module.exports={User}