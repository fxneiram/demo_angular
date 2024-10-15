import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  githubUrls = [
    {"name":"Fronted","url":"https://github.com/fxneiram/demo_angular"},
    {"name":"User API","url":"https://github.com/fxneiram/demo_user_api_golang"},
    {"name":"Auth API","url":""},
    {"name":"Stream API","url":""},
    {"name":"Subscription API","url":""},
    {"name":"Gateway API","url":""},
  ]

  author = "Faver Xavier Neira Molina";

}
