import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public email: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


validation(form: NgForm) {
  if(form.valid) {
    this.forgot(form.value).subscribe((data) => {
      console.log(data.success);
    });
  }

}




  private forgot(fgt): Observable<any> {
    return this.http.post('http://192.168.151.36:8000/api/reset', fgt);
  }
}
