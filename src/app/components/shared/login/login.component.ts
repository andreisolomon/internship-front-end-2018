import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;

  constructor() { }

  ngOnInit() {
  }

  validation(form: NgForm) {

    if (form.valid) {

      const fistname = form.value.firstname;
      const lastname = form.value.lastname;
      const email = form.value.email;
      const password = form.value.password;

      // back-end

    }
  }
}
