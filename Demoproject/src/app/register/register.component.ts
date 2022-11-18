import { Component, OnInit } from '@angular/core';
import { FormBuilder, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // uname:any
  // acno:any
  // password:any
  registerform=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')],],
    password:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(4)]]
  })

  constructor(private db:AuthserviceService,private rout:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  onregister(){
    var acno:any=this.registerform.value.acno
    var uname:any=this.registerform.value.uname
    var password:any=this.registerform.value.password

    
    if(this.registerform.valid){
      this.db.register(acno,uname,password)
      .subscribe((result)=>{
        console.log("result:",result);
        if(result){
          alert("registered successfully")
          this.rout.navigateByUrl('')
        }else{
          alert('invalid form')
        }
      },(result)=>{
        console.log("test:",result.error.message)
        alert(result.error.message)
        

      })
      }
    }
  }

  //   if(this.db.register(acno,uname,password)==false){
  //     alert("already registered")
  //   }else{
  //     alert("register successfull")
  //     this.rout.navigateByUrl('')
  //   }
  // }else{
//     alert("not a valid form")
//   }
// }}
