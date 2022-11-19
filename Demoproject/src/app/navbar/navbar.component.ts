import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../service/transaction.service';
// import { LoginComponent } from '../login/login.component';c

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:any
  constructor(private root:Router) { 
    this.user=JSON.parse(localStorage.getItem("currentName")||"")
  }

  ngOnInit(): void {
  }
  logout(){
    this.root.navigateByUrl('')
  }
  

}
