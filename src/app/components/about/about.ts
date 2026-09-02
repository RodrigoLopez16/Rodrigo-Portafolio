import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  downloadCV() {
   
    const link = document.createElement('a');
    link.href = 'assets/documents/Rodrigo_Retana_Resume';
    link.download = 'Rodrigo_Retana_Resume.pdf';
    link.click();
  }
}
