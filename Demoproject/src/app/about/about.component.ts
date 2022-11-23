import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   name:any
   acno:any
   delacno:any
  constructor(private http:HttpClient,private root:Router) { 
   this.name=JSON.parse(localStorage.getItem('currentName')||'')
   this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
  }

  ngOnInit(): void {
  }
  deleteacc(){
    this.delacno=JSON.parse(localStorage.getItem('currentAcno')||'')
  }
  delete(acno:any){
    
    this.http.delete(`http://localhost:3000/delete/${acno}`)
    
    
    .subscribe((res)=>{
      console.log(res);
    this.root.navigateByUrl('')


      
    })
  }
  cancel(){
    this.delacno=""
  }
  //   var conf=confirm('please confirm delete..')
  // if (conf) {
  //   const acno=JSON.parse(localStorage.getItem("currentAcno")||"")
  //   this.http.delete(`http://localhost:3000/delete/${acno}`)
    
    
  //   .subscribe((res)=>{
  //     console.log(res);
  //   this.root.navigateByUrl('')


      
  //   })
  // } else {
    
  // }
   
  
}
