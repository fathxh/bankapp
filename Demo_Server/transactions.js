const db=require("./db")


// const database=ds.database

const tHistory=(acno)=>{
  return db.User.findOne({acno})
  .then(user=>{
    if(user){
      return{
        statuscode:203,
        status:true,
        transaction:user.transaction
      }
    }
    
  })
    
}

const Withdraw=(acno,password,amount)=>{
  
  amount = parseInt(amount)
  return db.User.findOne({acno,password})
  .then(user=>{
    console.log("mubahiii",user);
    if(user){
      if(amount<user.balance){
        user.balance-=amount
        user.transaction.push({
          mode:"online",
          type:"withdraw",
          status:"success",
          amount
      })
      user.save()
      return{
        "statuscode":206,
        "status":true,
        "balance":user.balance,
        "transaction":user.transaction,
        "msg":"withdrawed successfully",
        amount
      }
      // alert(`amount ${amount} is added, your account balance is ${database[acno]["balance"]}`)
      }else{
        // alert("insufficiant fund")
        return{
          "statuscode":405,
          "status":false,
          "msg":"insufficiant fund"}
      }


    }else{
      // alert("password invalid")
      return{
        "statuscode":405,
        "status":false,
        "msg":"account not found"
      }
    }
  // }else{
  //   alert("account not found")
  //   return{
  //     "statuscode":405,
  //     "status":false,
  //     "msg":"account not found"}
  // }
  })
}


const depo=(acno,password,amount)=>{
  var amount=parseInt(amount)
return db.User.findOne({acno,password})
.then(user=>{
 
  if(user){
    user.balance+=amount
    console.log("mubeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",user);
    user.transaction.push({
      "mode":"online",
      "type":"deposit",
      "status":"success",
      amount
    })
    user.save()
    return{
      "statuscode":200,
      "status":true,
      "msg":"amount credited",
      "balance":user.balance,
      "transaction":user.transaction,
      amount
    }

  }else{
    // alert("account not found")
    return{
      "statuscode":405,
      "status":false,
      "msg":"account not found"
      
    }
  }
})
}
      // if(password==database[acno]['password']){
      //   database[acno]["balance"]+=Number(amount)
      //   database[acno]["transaction"].push({
      //     mode:"online",
      //     type:"deposite",
      //     amount:amount,


      //   })
      //   console.log(database[acno]["transaction"]);
      //   return{
      //     "statuscode":206,
      //     "status":true,
      //     "msg":"amount credited",
      //     "balance":database[acno]["balance"],
      //     "transaction":database[acno]["transaction"]

          
      //   }

      //   // alert(`amount ${amount} is added, your account balance is ${database[acno]["balance"]}`)
      // }else{
      //   // alert("password invalid")
      //   return{
      //     "statuscode":405,
      //     "status":false,
      //     "msg":"password invalid"}

      // }
    

// }
// const depo=(acno,password,amount)=>{
// if(acno in database){
//       if(password==database[acno]['password']){
//         database[acno]["balance"]+=Number(amount)
//         database[acno]["transaction"].push({
//           mode:"online",
//           type:"deposite",
//           amount:amount,


//         })
//         console.log(database[acno]["transaction"]);
//         return{
//           "statuscode":206,
//           "status":true,
//           "msg":"amount credited",
//           "balance":database[acno]["balance"],
//           "transaction":database[acno]["transaction"]

          
//         }

//         // alert(`amount ${amount} is added, your account balance is ${database[acno]["balance"]}`)
//       }else{
//         // alert("password invalid")
//         return{
//           "statuscode":405,
//           "status":false,
//           "msg":"password invalid"}

//       }
//     }else{
//       // alert("account not found")
//       return{
//         "statuscode":405,
//         "status":false,
//         "msg":"account not found"}
//     }

// }

module.exports={depo,Withdraw,tHistory}