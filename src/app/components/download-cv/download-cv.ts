import { Component } from '@angular/core';

@Component({
  selector: 'app-download-cv',
  imports: [],
  templateUrl: './download-cv.html',
  styleUrl: './download-cv.scss'
})
export class DownloadCv {
  lastUpdated = 'Julio 2025';
  showPreviewModal = false;
  
  downloadCV() {
    // Crear elemento de descarga
    const link = document.createElement('a');
    link.href = 'assets/documents/RodrigoRetanaCV.pdf';
    link.download = 'RodrigoRetanaCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostrar mensaje de confirmación
    this.showDownloadMessage();
  }
  
  previewCV() {
    // Abrir en nueva ventana
    window.open('assets/documents/RodrigoRetanaCV.pdf', '_blank');
  }
  
  private showDownloadMessage() {
    // Podrías implementar un toast o notification aquí
    alert('¡CV descargado correctamente! Gracias por tu interés.');
  }
}
