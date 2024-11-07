import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from "./exp/nav/nav.component";
import {FooterComponent} from "./exp/footer/footer.component";
import {BASE_PATH, UsersService} from "./core/modules/openapi";
import {environment} from "../environments/environment";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavComponent,
    FooterComponent,
    HttpClientModule,
    RouterOutlet
  ],
  providers: [
    UsersService, {provide: BASE_PATH, useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  standalone: true,
  imports: [CommonModule],
* */
