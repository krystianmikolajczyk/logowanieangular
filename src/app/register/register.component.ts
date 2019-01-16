import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  registerCheck(event){
    event.preventDefault();
    let password = event.target.password.value;
    let password2 = event.target.password2.value;

    if(password !== password2)
      alert("Hasła muszą być takie same");
    else
      this.router.navigate(['dashboard']);
  }

}
