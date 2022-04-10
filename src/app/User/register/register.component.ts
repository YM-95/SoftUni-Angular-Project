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
  //   this.authService.SignIn(email, password)
  // }

  // model: User = {
  //   id: '',
  //   username: '',
  //   email: '',
  //   password: '',
  //   repass: '',
  // };

  // Subjects: string[] = [
  //   'Science',
  //   'Math',
  //   'Physics',
  //   'Finance'
  // ];

  // submit(data: User) {
  //   this.firestore.collection('users')
  //     .add(data)
  //     .then(() => {
  //       this.router.navigate(['/']);
  //     }).catch(error => {
  //       window.alert(error.message)
  //     });
  // }
}
