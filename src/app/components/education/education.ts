import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  educationList = [
    {
      degree: 'Bachillerato en Ingeniería de Software',
      institution: 'Universidad Cenfotec',
      period: '2022 - Presente',
      location: 'San Pedro - Costa Rica',
      icon: 'fas fa-graduation-cap',
      description: 'Formación integral en desarrollo de software, algoritmos, estructuras de datos y metodologías de desarrollo web. Enfoque en tecnologías modernas y buenas prácticas de programación.',
      skills: ['Java', 'C++', 'Python', 'MySQL', 'Metodologías Ágiles', 'Análisis de Sistemas']
    }
  ];
}
