import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

var options={
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }

  getOptions(){
    const token=JSON.parse(localStorage.getItem('token')||'')
    let headers= new HttpHeaders()
    if(token){
      headers=headers.append('access-token',token)
      options.headers=headers
    }
    return options
  }

  deposit(acno:any,amount:any,password:any){
    const data={
      acno,
      amount,
      password
    }
    return this.http.post("http://localhost:3000/deposit",data,this.getOptions())
  }
  withdraw(acno:any,amount:any,password:any){
    const data={
      acno,
      amount,
      password
    }
    return this.http.post("http://localhost:3000/withdraw",data,this.getOptions())
  }
}
