import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistatorComponent } from './registator/registator.component';
import { AppRoutingModule } from './/app-routing.module';

const routes: Routes = [
  { path: 'register', component: RegistatorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistatorComponent
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
