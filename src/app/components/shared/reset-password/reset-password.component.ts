import { Component, OnInit } from '@angular/core';
import {api} from '../../../../assets/data/routes.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';

@Injectable()
export class ConfigService {
  constructor(private hhtp: HttpClient ) {}
}
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public resetpass = '';
  public resetpassconfirm = '';
  public confirm = true;
  constructor(private http: HttpClient) { }
  corect: boolean;
  ngOnInit() {
  }

  check() {
//   if (form.valid) {
//   this.resetpass(form.value).subscribe(data) => {
//   console.log(data.token);
//   window.localStorage.token = null;
//   window.localStorage.token = data.token;
//   }
// }
    if (this.resetpass !== this.resetpassconfirm){
      this.confirm = false;
      document.getElementById('matchPass' ).innerHTML = 'Passwords doesn\'t match!';
    } else {
      this.confirm = true;
      document.getElementById('matchPass' ).innerHTML = 'All good';
    }
  }
private reset(res): Observable<any> {
    return this.http.post ('{{api.base}}{{api.reset}}', res);
}
}
