import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AboutUsComponent } from './components/about-us/about-us.component'; 
import { SecureComponent } from './components/secure/secure.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ElementComponent } from './components/element/element.component';
import { LoginService } from './services/login/login.service';
import { DataService } from './services/data/data.service';
import { AuthenticationGuard } from './guards/authentication/authentication.guard';
import { AuthorizationGuard } from './guards/authorization/authorization.guard';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoveryComponent } from './components/recovery/recovery.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ReactiveFormsModule } from '@angular/forms';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ElementAdminComponent } from './components/element-admin/element-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent, 
    SecureComponent,
    PrincipalComponent,
    ElementComponent, 
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ElementAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    SnotifyModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [DataService, LoginService, AuthenticationGuard, AuthorizationGuard,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
