import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from 'src/app/CRUD/crud.service';
import { AuthService } from 'src/app/User/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  item: any;

  constructor(public CRUD: CRUDService, public router: Router, public route: ActivatedRoute, public authService: AuthService) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];

      this.item = this.CRUD.getSingleItem(this.id)
      console.log(this.item);
    });


  }

}
