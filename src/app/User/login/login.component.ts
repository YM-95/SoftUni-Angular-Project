import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  // login(email: string, password: string) {
  //   console.log('User isLoggedIn');
  //   this.authService.SignIn(email, password)
  // }

  submit(email: string, password: string) {
    this.authService.SignIn(email, password)
  }
  ngOnInit(): void { }

}
