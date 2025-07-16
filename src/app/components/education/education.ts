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
      degree: 'Ingeniería en Sistemas Computacionales',
      institution: 'Universidad Tecnológica Nacional',
      period: '2018 - 2022',
      location: 'Ciudad de México, MX',
      icon: 'fas fa-graduation-cap',
      description: 'Formación integral en desarrollo de software, algoritmos, estructuras de datos y metodologías de desarrollo. Enfoque en tecnologías modernas y buenas prácticas de programación.',
      highlights: [
        'Promedio académico: 9.2/10',
        'Proyecto de tesis: Sistema de gestión empresarial',
        'Presidente del club de programación',
        'Participación en hackathons universitarios'
      ],
      skills: ['Java', 'C++', 'Python', 'MySQL', 'Metodologías Ágiles', 'Análisis de Sistemas']
    },
    {
      degree: 'Técnico en Programación',
      institution: 'Instituto Tecnológico Superior',
      period: '2016 - 2018',
      location: 'Guadalajara, MX',
      icon: 'fas fa-code',
      description: 'Formación técnica especializada en programación y desarrollo web. Bases sólidas en lógica de programación y tecnologías web.',
      highlights: [
        'Mejor promedio de la generación',
        'Certificación en programación web',
        'Proyecto final: E-commerce completo'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress']
    }
  ];

  certifications = [
    {
      title: 'Angular Developer Certification',
      issuer: 'Google',
      date: 'Enero 2023',
      icon: 'fab fa-google',
      url: 'https://google.com/certification'
    },
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Marzo 2023',
      icon: 'fab fa-aws',
      url: 'https://aws.amazon.com/certification'
    },
    {
      title: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: 'Febrero 2023',
      icon: 'fas fa-certificate',
      url: 'https://scrum.org/certification'
    },
    {
      title: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: 'Diciembre 2022',
      icon: 'fab fa-node-js',
      url: 'https://openjsf.org/certification'
    }
  ];
}
