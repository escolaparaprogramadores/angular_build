import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credenciais: any = {
    email: '',
    password: '',
  }

  errorCredenciais = false;

  onSubmit(credenciais) {
    console.log(this.credenciais);
    this.auth.login(this.credenciais).subscribe(
      (resp) => {
        this.router.navigate(['admin']);
      },
      (errorResponse: HttpErrorResponse) => {
        //  console.log(errorResponse);
        if (errorResponse.status === 401) {
          this.errorCredenciais = true;
        }
      }
    );
  }

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }


}
