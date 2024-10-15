import { Component, Input, OnInit } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() duration: number = 5;
  isVisible: boolean = false;
  alertClass: string = '';

  visible: boolean = true;

  showAlert(type: string, title: string, message: string) {
    this.alertClass = type;
    this.title = title;
    this.message = message;
    this.isVisible = true;

    setTimeout(() => {
      this.hideAlert();
    }, this.duration * 1000); // Convertir a milisegundos
  }

  hideAlert() {
    this.isVisible = false;
  }

  success(title: string, message: string) {
    this.showAlert('alert-success', title, message);
  }

  warning(title: string, message: string) {
    this.showAlert('alert-warning', title, message);
  }

  danger(title: string, message: string) {
    this.showAlert('alert-danger', title, message);
  }

  info(title: string, message: string) {
    this.showAlert('alert-info', title, message);
  }
}
