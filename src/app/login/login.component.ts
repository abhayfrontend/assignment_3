import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGuardService } from '../auth-services/auth-guard.service'
import { Router } from '@angular/router';

import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  params = {
    username: '',
    password: '',
    rememberMe: null,
  };
  constructor(private auth: AuthGuardService, private router: Router) { }

  ngOnInit() {
    console.log('a')
  }



  logIn() {
    this.auth.login(this.params).subscribe(res => {
      localStorage.setItem('token', res.id_token);
  
          this.router.navigate(['home'])
       

      


    }, err => {
      window.alert('check your username and password');
      this.params = {
        username: '',
        password: '',
        rememberMe: null,
      };
    });
  }

}