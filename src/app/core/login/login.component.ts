import { Component } from '@angular/core';
import { AuthService } from '../../services/LoginService/auth.service';
import { FormBuilder , FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // loginForm: FormGroup;

  email! : string;
  password! : string;

  constructor(private auth : AuthService){}
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  // }


  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const email : string= this.loginForm.get('email')?.value;
  //     const password = this.loginForm.get('password')?.value;
  //     console.log('Email:', email);
  //     console.log('Password:', password);
  // //     this.login(email, password);
  // //   }
  // // }

  login(email : string, password : string){
    this.auth.login(
      email,
      password
    );
  }
}
