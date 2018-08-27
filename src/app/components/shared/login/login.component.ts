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

  public email: string;
  public password: string;

  constructor(private http: HttpClient, private router: Router) { }

  correct: boolean = false;

  ngOnInit() { localStorage.clear(); }

  validation(form: NgForm) {
    console.log('validation');
    if (form.valid) {
      console.log('form valid');
      this.login(form.value).subscribe((data) => {
        console.log('subscribe');
        debugger;
        if (data.success) {
          console.log('data success');
          localStorage.clear;
          localStorage.token = data.token;
          this.correct = true;
          this.router.navigate(['/dashboard']);
        }else{
          this.correct=false;
          document.getElementById('true').innerHTML = 'LOGIN INCORRECT';
          localStorage.clear;
        }
      });
    }
    // if (!this.correct) {
    //   document.getElementById('true').innerHTML = 'LOGIN INCORRECT';
    //   localStorage.clear;
    // }
  }

  private login(obj): Observable<any> {
    return this.http.post('http://192.168.151.36:8000/api/login', obj);
  }
}
