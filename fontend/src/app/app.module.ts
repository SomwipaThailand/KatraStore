import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistatorComponent } from './registator/registator.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PageAfterLoginComponent } from './page-after-login/page-after-login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistatorComponent },
  { path: 'afterLogin', component: PageAfterLoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistatorComponent,
    LoginComponent,
    HeaderComponent,
    PageAfterLoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
