import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any={
    1000:{acno:1000,uname:"fathah",password:1000,blance:10000}
  }
  welcome:any="welcome to bank"
  enteracc:any="Enter account number"
  enterpass:any="Enter password"
  accountnumber:any
  password=""
  

  constructor(private route:Router,private db:AuthserviceService) { }

  ngOnInit(): void {
  }
  login(){
    var acno:any=this.accountnumber
    var pass:any=this.password

    this.db.login(acno,pass)
     .subscribe((result:any)=>{
      // console.log("result---------------",result);
      
      alert(result.message)
      localStorage.setItem("currentAcno",JSON.stringify(result.acno))
      localStorage.setItem("currentName",JSON.stringify(result.currentname))
      localStorage.setItem("token",JSON.stringify(result.token))
      this.route.navigateByUrl('dashboard')

     },(result:any)=>{
      alert(result.error.message)
     })
    
  }
    
  }
  //one way binding----------------------------------view to component
  // accountchange(event:any){
  //   this.accountnumber=event.target.value
  //   console.log("account:",this.accountnumber);
    
  // }
  // passwordchange(event:any){
  //   this.password=event.target.value
  //   console.log("password:",this.password);
    
  // }

