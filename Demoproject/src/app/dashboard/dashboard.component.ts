import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthserviceService } from '../service/authservice.service';
// import { HttpClient } from "@angular/common/http";
// import { Router } from '@angular/router';
import { TransactionService } from '../service/transaction.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dacno:any
  dpassword:any
  damount:any

  wacno:any
  wpassword:any
  wamount:any


  constructor(private tr:TransactionService,private root:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert("please log in again")
      this.root.navigateByUrl('')
    }
  }
  
  
  depo(){
    var acno:any=this.dacno
    var password:any=this.dpassword
    var amount:any=this.damount
    // var database=this.db.database
    this.tr.deposit(acno,amount,password)
    .subscribe((result:any)=>{
      
      
      alert(`Rs:${result.amount}deposited successfully.Your current balance is RS:${result.balance}`)
      // this.root.navigateByUrl('')
          
          // else{
        //     alert('invalid form')
        //   }
    },(result:any)=>{
      // console.log("test:",result.error.message)
      alert(result.error.msg)
    })
  }
    // .subscribe((result:any)=>{
    //   console.log("result:",result);
    //   if(result){
    //     // alert("deposit successfully")
    //     alert(`Rs:${result.amount}deposited successfully.Your current balance is RS:${result.balance}`)
    //     // this.root.navigateByUrl('')
    //   }else{
    //     alert('invalid form')
    //   }
    // },(result:any)=>{
    //   console.log("test:",result.error.message)
    //   alert(result.error.message)
      

    // })
  // } 

      // if(acno in database){
      //   if(password==database[acno]['password']){
      //     database[acno]["balance"]+=Number(amount)
      //     database[acno]["transaction"]={
      //       type:"online",
      //       amount:amount
      //     }
      //     alert(`amount ${amount} is added, your account balance is ${database[acno]["balance"]}`)
      //   }else{
      //     alert("password invalid")
      //   }
      // }else{
      //   alert("account not found")
      // }
    
  

  Withdraw(){
    var acno=this.wacno
    var password=this.wpassword
    var amount=this.wamount
    // var database=this.db.database

   this.tr.withdraw(acno,amount,password)
    .subscribe((result:any)=>{
      console.log("result:",result);
      if(result){

        alert(`Rs:${result.amount}withdrawed successfully.Your current balance is RS:${result.balance}`)
        // this.root.navigateByUrl('')
      }else{
        alert('invalid form')
      }
    },(result:any)=>{
      console.log("test:",result.error.message)
      alert(result.error.msg)
      

    })
  //   if(acno in database){
  //     if(password==database[acno]['password']){
  //       if(Number(amount)<database[acno]["balance"]){
  //         database[acno]["balance"]-=Number(amount)
  //         database[acno]["transaction"]={
  //         type:"online",
  //         amount:amount
  //       }
  //       alert(`amount ${amount} is added, your account balance is ${database[acno]["balance"]}`)
  //       }else{
  //         alert("insufficiant fund")
  //       }
        
  //     }else{
  //       alert("password invalid")
  //     }
  //   }else{
  //     alert("account not found")
  //   }
  // }

}
flag:any=true

onbtn(){
  this.flag=false

}
}
