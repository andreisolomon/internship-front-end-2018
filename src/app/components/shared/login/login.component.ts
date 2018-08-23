import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable()
// export class ConfigService {
//   constructor(private http: HttpClient) { }
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private http: HttpClient) { }

  correct: boolean;

  ngOnInit() {
  }
  validation(form: NgForm) {
    // debugger
    if (form.valid) {
      this.login(form.value).subscribe((data) => {
        console.log(data.token);
        window.localStorage.token = null;
        window.localStorage.token = data.token;
        
        this.correct = true;

        // debugger
      });
    }
  }
  private login(obj): Observable<any> {
    return this.http.post('http://192.168.151.36:8000/api/login', obj);

  }
  redirect() {
    if (this.correct === true) {
      window.location.href = '/dashboard';
    } else {
      //alert('Login incorrect');
      document.getElementById('true').innerHTML = 'LOGIN INCORRECT';
    }

  }
}

