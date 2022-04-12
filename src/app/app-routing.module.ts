import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './shared/home-view/home-view.component';

import { ContactComponent } from './core/contact/contact.component';
import { LoginComponent } from './User/login/login.component'
import { RegisterComponent } from './User/register/register.component';
import { CatalogComponent } from './shared/catalog/catalog.component';
import { CreateComponent } from './CRUD/create/create.component';
import { EditComponent } from './CRUD/edit/edit.component';
import { DetailsComponent } from './shared/details/details.component';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'catalog', component: CatalogComponent,
    // children: [
    //   {
    //     path: 'create',
    //     component: CreateComponent
    //   }],
  },
  { path: 'catalog/create', component: CreateComponent },
  { path: 'catalog/edit/:id', component: EditComponent },
  { path: 'catalog/:id', component: DetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
