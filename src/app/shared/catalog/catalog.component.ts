import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../../interface/user';
import { map, Observable } from 'rxjs';
import { CRUDService } from '../../CRUD/crud.service';
import { Card } from '../../interface/product-card'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/User/auth.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {


  items: Card[] = [];

  constructor(public CRUD: CRUDService, public authService: AuthService) {

    this.CRUD.getItems().subscribe(user => {
      user.forEach((user: Card) => this.items.push(user))
    })
    console.log(this.items);
  }

  ngOnInit() { }

}
