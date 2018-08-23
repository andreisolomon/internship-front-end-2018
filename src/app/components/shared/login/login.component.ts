import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { tap, catchError } from 'rxjs/operators';

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

  constructor(private http: HttpClient, private router: Router) {
    
  }

  correct: boolean = false;

  ngOnInit() {
  }
  validation(form: NgForm) {

    if (form.valid) {
      this.login(form.value).subscribe((data) => {
        console.log(data);
        if (data.success) {
          localStorage.clear;
          localStorage.token = data.token;
          this.correct = true;
          this.router.navigate(['/dashboard']);
        } else {   
        }
      });
    }
    if (!this.correct) {
      document.getElementById("true").innerHTML = "LOGIN INCORRECT";
      localStorage.clear;
    }
  }

  private login(obj): Observable<any> {
    return this.http.post('http://192.168.151.36:8000/api/login', obj)


  }
}