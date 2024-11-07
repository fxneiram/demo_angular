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
  fileName = '';
  fileExtension = '';
  base64file = '';

  constructor(private http: HttpClient) { }

  onSubmit(): void {

    // Realizar la solicitud HTTP POST
    this.http.post('https://tu-backend.com/api/upload', this.mediaRequest)
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

  // Método para procesar la carga de archivos
  onFileChange(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.fileExtension = file.name.split('.').pop() || '';

      // Convertir el archivo a base64
      const reader = new FileReader();
      reader.onload = () => {
        this.base64file = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
