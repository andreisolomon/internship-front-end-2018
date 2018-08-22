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
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

    public firstname: string;
    public lastname: string;
    public email: string;
    public password: string;
    
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  validation(form: NgForm) {

    if (form.valid) {
      this.register(form.value).subscribe((data) => {
        console.log(data.token);
        window.localStorage.token = null;
        window.localStorage.token = data.token;

        // 
      });
      // const fistname = form.value.firstname;
      // const lastname = form.value.lastname;
      // const email = form.value.email;
      // const password = form.value.password;

      // back-end

    }
  }

  private register(up): Observable<any> {
    return this.http.post('http://192.168.151.36:8000/api/register', up);
  }

}
