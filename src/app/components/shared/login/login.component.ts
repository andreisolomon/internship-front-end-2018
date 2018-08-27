import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password: string;
  public tip: string;

  constructor(private http: HttpClient, private router: Router) {
     this.tip = 'password';
  }

  ngOnInit() {
    localStorage.clear();
  }

  validation(form: NgForm) {
    console.log('validation');
    if (form.valid) {
      this.login(form.value).subscribe((data) => {
        console.log('subscribe');
        if (data.success) {
          console.log('data success');
          localStorage.token = data.token;
          this.router.navigate(['/dashboard']);
        } else {
          document.getElementById('true').innerHTML = 'LOGIN INCORRECT';
        }
      });
    }
  }

  private login(obj): Observable<any> {
    return this.http.post('http://192.168.151.36:8000/api/login', obj);
  }

  show() {
    if (this.tip === 'password'){
      this.tip = 'text';
    } else {
      this.tip = 'password';
    }
  }
}
