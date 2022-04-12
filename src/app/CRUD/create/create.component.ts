import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Card } from 'src/app/interface/product-card';


import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  model: Card = {
    key: '',
    title: '',
    type: '',
    price: '',
    city: '',
    owner: '',
    bedrooms: '',
    image: '',

  };

  constructor(public CRUD: CRUDService, public firestore: AngularFirestore, public router: Router) { }

  ngOnInit(): void {
  }


  // submit(data: Card) {
  //   this.CRUD.addItems(data)
  // }


}
