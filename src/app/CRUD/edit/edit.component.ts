import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/interface/product-card';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any;

  model: any = {
    key: '',
    title: '',
    type: '',
    price: '',
    city: '',
    owner: '',
    bedrooms: '',
    image: '',
  };

  constructor(public route: ActivatedRoute, public CRUD: CRUDService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"]
    });
    this.model = this.CRUD.getSingleItem(this.id)
  };

  onSubmit() {
    this.CRUD.updateItem(this.id, this.model)
  }
};