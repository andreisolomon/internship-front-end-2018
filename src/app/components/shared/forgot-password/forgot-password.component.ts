import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public email: string;

  constructor() { }

  ngOnInit() {
  }


validateHorizontalPosition(form: NgForm) {
  if(form.valid) {
    const email = form.value.email;
  }
}}
