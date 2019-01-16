import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginCheck(event){
    event.preventDefault();
    let login = event.target.login.value;
    let password = event.target.password.value;

    if(login == 'test1' && password == 'test1')
      this.router.navigate(['dashboard']);
    else
      alert("Zły login lub hasło");
  }
    
  }
