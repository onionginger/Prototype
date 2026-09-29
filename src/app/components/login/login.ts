import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { Authenticator } from '../../services/authenticator/authenticator'

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit{

  constructor() {};

  ngOnInit(): void {
    
  }

  isLogin = false;
  LoginValid = false;

  switchModes() {
    this.isLogin = !this.isLogin;
    console.log("switch")
  }

  onSubmit() {
    if (this.isLogin) {

    }
    else {

    }
  }

  saveLogin() {
    let data = { id: 10, name:'zyz'};

    localStorage.setItem('session', JSON.stringify(data))
  }

  storeUser() {

  }



  login:any = {
    email: "",
    password: "",
  }
}
