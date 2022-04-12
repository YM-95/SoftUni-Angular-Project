import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Routing Module
import { AppRoutingModule } from './app-routing.module';
//HTTP Module
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './core/contact/contact.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { CreateComponent } from './CRUD/create/create.component';
import { EditComponent } from './CRUD/edit/edit.component';
import { CatalogComponent } from './shared/catalog/catalog.component';
import { DetailsComponent } from './shared/details/details.component';
//Bootstrap Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeViewComponent } from './shared/home-view/home-view.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
//Service
import { AuthService } from './User/auth.service';
import { CRUDService } from './CRUD/crud.service';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    HomeViewComponent,
    CatalogComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Angular-App'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    CommonModule,
  ],
  providers: [AuthService, CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
