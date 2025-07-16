import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experiences = [
    {
      position: 'Desarrollador Full Stack Senior',
      company: 'TechCorp Solutions',
      period: 'Enero 2023 - Presente',
      location: 'Remoto',
      icon: 'fas fa-laptop-code',
      description: 'Lidero el desarrollo de aplicaciones web modernas utilizando Angular, Node.js y tecnologías en la nube. Responsable de la arquitectura técnica y mentoría del equipo.',
      achievements: [
        'Desarrollé 3 aplicaciones web que mejoraron la eficiencia operativa en 40%',
        'Implementé arquitectura de microservicios reduciendo tiempo de respuesta en 60%',
        'Lideré un equipo de 5 desarrolladores junior',
        'Introduje prácticas de DevOps mejorando el tiempo de deployment en 50%'
      ],
      technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker', 'Git']
    },
    {
      position: 'Desarrollador Frontend',
      company: 'Digital Innovation Lab',
      period: 'Marzo 2022 - Diciembre 2022',
      location: 'Ciudad de México',
      icon: 'fas fa-code',
      description: 'Desarrollé interfaces de usuario interactivas y responsivas para aplicaciones web empresariales, enfocándome en la experiencia del usuario y optimización de rendimiento.',
      achievements: [
        'Creé interfaces responsivas que aumentaron engagement en 35%',
        'Optimicé rendimiento de aplicaciones mejorando velocidad de carga en 45%',
        'Implementé sistema de design system unificado',
        'Colaboré estrechamente con diseñadores UX/UI'
      ],
      technologies: ['React', 'JavaScript', 'SASS', 'Bootstrap', 'Redux', 'Webpack']
    },
    {
      position: 'Desarrollador Junior',
      company: 'StartupTech',
      period: 'Junio 2021 - Febrero 2022',
      location: 'Guadalajara, MX',
      icon: 'fas fa-rocket',
      description: 'Primeros pasos en el desarrollo web profesional, trabajando en proyectos diversos y aprendiendo buenas prácticas de desarrollo de software.',
      achievements: [
        'Desarrollé 5 páginas web corporativas desde cero',
        'Implementé sistema de gestión de contenidos personalizado',
        'Participé en procesos de testing y QA',
        'Aprendí metodologías ágiles (Scrum)'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress']
    }
  ];
}
