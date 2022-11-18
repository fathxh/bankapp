import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  uname:any
  address:any
  acno:any
  pan:any
  adhaar:any
  cDatabase:any={}
  dummyarray:any=[]
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    this.cDatabase[this.acno]={
     "name":this.uname,
     "address":this.address,
     "acno":this.acno,
     "pan":this.pan,
     "adhaar":this.adhaar
    }
    alert('applied success')
    console.log(this.cDatabase);
    
    this.dummyarray.push({
      "name":this.uname,
      "address":this.address,
      "acno":this.acno,
      "pan":this.pan,
      "adhaar":this.adhaar
    })
    console.log(this.dummyarray);
    
  }
}
