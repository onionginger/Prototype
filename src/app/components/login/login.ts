import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authenticator/authenticator';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit{

  

  isLogin = false;

loginForm?: any;

  constructor(private fb: FormBuilder, private authService : AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    // this.loginForm = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
       // Call the authentication service's login method
  //     if (this.authService.isLoggedIn()) {
        // Navigate to the ProductListComponent upon successful login
        this.router.navigate(['/chat']);
    //  } else 

//      }  
    }


  }

  switchModes() {
    this.isLogin = !this.isLogin;
  }


}
