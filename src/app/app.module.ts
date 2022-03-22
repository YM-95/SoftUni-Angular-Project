import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Routing Module
import { AppRoutingModule } from './app-routing.module';
//HTTP Module
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//Bootstrap Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeViewComponent } from './home-view/home-view.component';
import { CoreModule } from './core/core.module';
//Firebase 
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Angular-App')

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
