import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { CreateComponent } from '../CRUD/create/create.component'
import { Router } from '@angular/router';
import { EditComponent } from '../CRUD/edit/edit.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  ]
})
export class SharedModule {

  constructor(private route: ActivatedRoute, public router: Router) { }
}
