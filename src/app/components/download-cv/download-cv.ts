import { Component } from '@angular/core';

@Component({
  selector: 'app-download-cv',
  imports: [],
  templateUrl: './download-cv.html',
  styleUrl: './download-cv.scss'
})
export class DownloadCv {
  lastUpdated = 'Enero 2024';
  
  downloadCV() {
    // Crear elemento de descarga
    const link = document.createElement('a');
    link.href = 'assets/documents/cv-rodrigo-desarrollador.pdf';
    link.download = 'CV-Rodrigo-Desarrollador-FullStack.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostrar mensaje de confirmación
    this.showDownloadMessage();
  }
  
  previewCV() {
    // Abrir CV en nueva ventana para vista previa
    window.open('assets/documents/cv-rodrigo-desarrollador.pdf', '_blank');
  }
  
  private showDownloadMessage() {
    // Podrías implementar un toast o notification aquí
    alert('¡CV descargado correctamente! Gracias por tu interés.');
  }
}
