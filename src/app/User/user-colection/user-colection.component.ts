import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/CRUD/crud.service';
import { Card } from 'src/app/interface/product-card';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-colection',
  templateUrl: './user-colection.component.html',
  styleUrls: ['./user-colection.component.css']
})
export class UserColectionComponent implements OnInit {

  items: Card[] = [];

  constructor(public CRUD: CRUDService, public authService: AuthService) {

    this.CRUD.getItems().subscribe(user => {
      user.forEach((user: Card) => this.items.push(user))
    })
    console.log(this.items);
  }
  ngOnInit(): void {
  }

}
