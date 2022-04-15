import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Card } from 'src/app/interface/product-card';
import { AuthService } from 'src/app/User/auth.service';


import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  model: any = {
    title: '',
    type: '',
    price: '',
    city: '',
    owner: '',
    bedrooms: '',
    image: '',
    postOwner: this.authService.userData.uid
  };

  constructor(public CRUD: CRUDService, public firestore: AngularFirestore, public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }


  submit() {
    this.CRUD.addItem(this.model)
  }


}
