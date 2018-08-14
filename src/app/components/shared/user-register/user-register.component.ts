import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

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
