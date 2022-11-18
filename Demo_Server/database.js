const jwt=require('jsonwebtoken')
const db=require('./db')


// database={
//     1000:{acno:1000,uname:"fathah",password:1000,balance:10000,transaction:[]}
//   }
  



const register=(acno,uname,password)=>{

  return db.User.findOne({acno})
  .then(user=>{                     //promise is used with then and catch
    if(user){
      return{
        statuscode:404,
        status:false,
        msg:"already a user"
      }
    }else{
      const newUser= new db.User({
        acno,
        name:uname,                //to match with content in db.js 
        password,
        balance:0,
        transaction:[]

      })
      newUser.save()                //save newUser to database
      return{
        statuscode:200,
        status:true,
        msg:"registered successfully"
      }
    }
  })
}
  //   if(acno in database){
  //     return {
  //       "statuscode":422,
  //       "status":false,
  //       "message":"user already exist"
  //     }
  //   }else{
  //     database[acno]={
  //       acno,
  //       uname,
  //       password,
  //       balance:0
  //     }
  //     console.log(database);
      
  //     return {
  //       "statuscode":203,
  //       "status":true,
  //       "message":"registered successfully"
  //     }
  //   }
  // }

  const login=(acno,password)=>{
    return db.User.findOne({acno,password})
      .then(user=>{
        if(user){
        currentname=user.name
        // currentacno=acno

        // acno=database[acno]['acno']
        
        // var username=database[acno]['uname']
        // localStorage.setItem('user',JSON.stringify(username))

        //generating tokens--------------------------------------sign()-------------------------------
        token=jwt.sign({
          currentacno:acno
        },'supersecretkey@123')

        return {
            "status":true,
            "statuscode":202,
            "message":"login success",
            currentname,
            acno,
            token
        }
      }else{
        
        return {
            "status":false,
            "statuscode":404,
            "message":"password incurrect"
        }
      }
      
    
    })
    
  }
  // const login=(acno,pass)=>{
  //   if(acno in database){
  //     if(pass==database[acno]['password']){
  //       username=database[acno]['uname']
  //       // acno=database[acno]['acno']
        
  //       // var username=database[acno]['uname']
  //       // localStorage.setItem('user',JSON.stringify(username))

  //       //generating tokens--------------------------------------sign()-------------------------------
  //       token=jwt.sign({
  //         currentacno:acno
  //       },'supersecretkey@123')

  //       return {
  //           "status":true,
  //           "statuscode":202,
  //           "message":"login success",
  //           username,
  //           "acno":acno,
  //           token
  //       }
  //     }else{
        
  //       return {
  //           "status":false,
  //           "statuscode":404,
  //           "message":"password incurrect"
  //       }
  //     }
      
  //   }else{
      
  //     return {
  //       "status":false,
  //       "statuscode":404,
  //       "message":"incurrect user"
  //   }
  //   }
    
  // }

  module.exports={register,login}