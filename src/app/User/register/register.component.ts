import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service'
import { User } from '../../interface/user'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {

  constructor(public firestore: AngularFirestore, public authService: AuthService, public router: Router) { }

  ngOnInit(): void { }



  // register(email: string, password: string) {
  //  
  // }

  model: User = {
    uid: '',
    displayName: '',
    email: '',
    password: '',
  };

  submit() {
    this.authService.SignUp(this.model.email, this.model.password)
  }
}
