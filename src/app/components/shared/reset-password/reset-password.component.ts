import { Component, OnInit } from '@angular/core';
import { api } from '../../../../assets/data/apiUrl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../auth.service';

@Injectable()
export class ConfigService {
  constructor(private hhtp: HttpClient) {
  }
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public resetpass = '';
  public resetpassconfirm = '';
  corect: boolean;
  public token: string;
  public url;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['category']);
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.token = params['token'];
      }
    );
    this.url = api.base + '/reset/' + this.token;
  }

  validation(form: NgForm) {
    if (form.valid) {
      this.reset(form.value).subscribe((data) => {
        console.log(data);
        localStorage.clear();
        if (data.token !== undefined) {
          localStorage.token = data.token;
        }
        this.router.navigate(['/login']);
      });
    }
  }

  private reset(res): Observable<any> {
    return this.http.post(this.url, res);
  }


  check() {
    if (this.resetpass !== this.resetpassconfirm) {
      document.getElementById('matchPass').innerHTML = 'Passwords doesn\'t match!';
    } else {

    }
  }
}


