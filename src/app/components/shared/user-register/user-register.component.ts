import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthService} from '../../../auth.service';

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
    public tip: string;
    
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {   this.tip='password';}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['category']);
    }
  }
 
  validation(form: NgForm) {

    if (form.valid) {
      this.register(form.value).subscribe((data) => {
        console.log(data.token);
        localStorage.clear;
        // localStorage.token = data.token;
        this.router.navigate(['/login']);

      });


    }
  }

  private register(up): Observable<any> {
    return this.http.post('http://192.168.151.36:8000/api/register', up);
  }
  show(){
    if (this.tip==='password'){
        this.tip='text';
    }
    else{
      this.tip='password';
    }
  
  }
}
