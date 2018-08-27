import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password: string;
  public tip: string;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
     this.tip = 'password';
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['category']);
    }
  }

  correct: string = '';

  validation(form: NgForm) {

    this.correct = 'LOGIN INCORRECT';

    if (form.valid) {

      this.login(form.value).subscribe((data) => {
        
        if (data.success) {
          localStorage.clear();
          localStorage.token = data.token;
          this.router.navigate(['/dashboard']);
        } else {
          this.correct = 'LOGIN INCORRECT';
          localStorage.clear();
        }
      });
    }
  }

  private login(obj): Observable<any> {
    return this.http.post('http://192.168.151.36:8000/api/login', obj);
  }

  show() {
    if (this.tip === 'password') {
      this.tip = 'text';
    } else {
      this.tip = 'password';
    }
  }
}
