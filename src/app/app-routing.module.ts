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
import { UserGuard } from './Guards/user.guard';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { UserColectionComponent } from './User/user-colection/user-colection.component';
import { UserEditComponent } from './User/user-edit/user-edit.component'

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
  { path: 'create', component: CreateComponent, canActivate: [UserGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [UserGuard] },
  { path: 'catalog/:id', component: DetailsComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [UserGuard] },
  { path: 'user-colection', component: UserColectionComponent, canActivate: [UserGuard] },
  { path: 'user-edit', component: UserEditComponent, canActivate: [UserGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
