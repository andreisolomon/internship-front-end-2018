import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public resetpass = '';
  public resetpassconfirm = '';
  public confirm = true;
  constructor() { }

  ngOnInit() {
  }

  check(){

    if(this.resetpass != this.resetpassconfirm){
      this.confirm = false;
    } else{
      this.confirm=true;
    }
  }

}
