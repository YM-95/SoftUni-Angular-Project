import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/User/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: any
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.userData = this.authService.userData
    console.log(this.userData)
  }

}
