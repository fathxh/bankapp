import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  AuthserviceService{

  username:any

  database:any={
    1000:{acno:1000,uname:"fathah",password:1000,balance:10000}
  }

  constructor(private http:HttpClient) { }

  register(acno:any,uname:any,password:any){
    const data={
      acno,
      uname,
      password
    }
    return this.http.post("http://localhost:3000/register",data)
  }
  // register(acno:any,uname:any,password:any){
  //   var database:any=this.database
  //   if(acno in database){
  //     return false
  //   }else{
  //     database[acno]={
  //       acno,
  //       uname,
  //       password,
  //       balance:0
  //     }
  //     console.log(database);
      
  //     return true
  //   }
  // }

login(acno:any,pass:any){
  const data={
    acno,
    "password":pass
  }
  return this.http.post("http://localhost:3000/login",data)
  // var database:any=this.database
  // if(acno in database){
  //   if(pass==database[acno]['password']){
      
  //     this.username=database[acno]['uname']
  //     localStorage.setItem('user',JSON.stringify(this.username))
  //     return true
  //   }else{
  //     alert("password incurrect")
  //     return false
  //   }
    
  // }else{
  //   alert("incurrect user")
  //   return false
  // }
  
}
}
