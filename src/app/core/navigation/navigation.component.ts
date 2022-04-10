import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import { AuthService } from '../../User//auth.service'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  user!: firebase.User;

  constructor(public AuthService: AuthService, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((result) => {
      if (result) {
        this.user = result;
      }
    });
  }

  logout() {
    this.AuthService.SignOut()
  }

  ngOnInit(): void { }

}
