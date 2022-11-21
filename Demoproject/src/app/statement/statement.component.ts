import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  constructor(private tr:TransactionService) { }
  array:any

  ngOnInit(): void {

    
  const acno=JSON.parse(localStorage.getItem('currentAcno')||"")
    console.log(acno);
  
        this.tr.statement(acno)
    .subscribe((result:any)=>{
      // console.log("result:",result.transaction);
      if(result){
        
        this.array=result.transaction
        console.log(this.array);
        

        // alert()
        // this.root.navigateByUrl('')
      }else{
        alert('invalid form')
      }
    },(result:any)=>{
      console.log("test:",result.error.message)
      alert(result.error.message)
      

    })
  }
  }
  


