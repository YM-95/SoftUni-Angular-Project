import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../CRUD/crud.service'

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(public firestore: CRUDService) { }


  ngOnInit(): void {

  }

}
