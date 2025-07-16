import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  downloadCV() {
    // Aquí implementarías la lógica para descargar el CV
    const link = document.createElement('a');
    link.href = 'assets/documents/cv-rodrigo.pdf';
    link.download = 'CV-Rodrigo-Desarrollador.pdf';
    link.click();
  }
}
