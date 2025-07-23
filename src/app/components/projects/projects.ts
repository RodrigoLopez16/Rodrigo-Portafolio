import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  activeFilter = 'all';
  
  projects = [
    {
      id: 1,
      title: 'Proyecto 1 - Ayuno Intermitente',
      description: 'Plataforma para el manejo de ayuno intermitente, con seguimiento de progreso, recetas y peso',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=200&fit=crop',
      technologies: ['HTML', 'CSS', 'MongoDB'],
      githubUrl: 'https://github.com/RodrigoLopez16/Primera-iteraci-n'
    },
    {
      id: 2,
      title: 'Proyecto 3 - Tributico',
      description: 'Aplicación web para la creación de un sistema de triburtación para emprendimientos pequeños en Costa Rica.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
      technologies: ['Java', 'Spring boot', 'Angular', 'MariaDB'],
      githubUrl: 'https://github.com/CodingLab-TribuTico'
    }
  ];  
  
  
  viewProject(project: any) {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else {
      alert('Este proyecto no tiene demo disponible');
    }
  }
  
  viewCode(project: any) {
    window.open(project.githubUrl, '_blank');
  }
}
