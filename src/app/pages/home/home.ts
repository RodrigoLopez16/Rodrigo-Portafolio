import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Experience } from '../../components/experience/experience';
import { Education } from '../../components/education/education';
import { Projects } from '../../components/projects/projects';
import { DownloadCv } from '../../components/download-cv/download-cv';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, About, Skills, Experience, Education, Projects, DownloadCv, Contact, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  
  scrollToProjects() {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
