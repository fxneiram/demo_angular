import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DualLangMediaRequest } from './dto-dual-lang-media-request';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  mediaRequest: DualLangMediaRequest = {} as DualLangMediaRequest;
  file: File | null = null;
  fileName = '';
  fileExtension = '';
  base64file = '';

  constructor(private http: HttpClient) { }

  // Método para procesar la carga del archivo
  onFileChange(event: any): void {
    const file: File = event.target.files[0];
    console.log('File selected:', file);
    if (file) {
      this.fileName = file.name;
      this.fileExtension = file.name.split('.').pop() || '';
      this.file = file;

      // Convertir el archivo a base64
      const reader = new FileReader();
      reader.onload = () => {
        this.base64file = reader.result as string;
        this.mediaRequest.base64file = this.base64file;  // Asignar el archivo a la solicitud
      };
      reader.readAsDataURL(file);
    }
  }

  // Método que se llama al enviar el formulario
  onSubmit(): void {
    if (!this.file) {
      alert('File is required!');
      return;
    }

    // Realizar la solicitud HTTP POST
    this.http.post('http://localhost:8082/api/files/upload', this.mediaRequest)
      .subscribe({
        next: (response) => {
          console.log('Upload successful:', response);
          alert('Upload successful!');
        },
        error: (error) => {
          console.error('Error uploading:', error);
          alert('Error uploading file.');
        }
      });
  }
}
