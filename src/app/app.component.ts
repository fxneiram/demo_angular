import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiModule } from './core/modules/openapi';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApiModule, HttpClientModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-angular';
}
