import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from "./exp/nav/nav.component";
import {FooterComponent} from "./exp/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, NavComponent, FooterComponent],
  providers: [UsersService, {provide: BASE_PATH, useValue: environment.apiUrl}],
* */
