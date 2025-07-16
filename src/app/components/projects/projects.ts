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
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Plataforma de comercio electrónico completa con panel de administración, carrito de compras y sistema de pagos.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/rodrigo/ecommerce',
      stars: 45,
      forks: 12
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y reportes.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveUrl: 'https://task-manager-demo.com',
      githubUrl: 'https://github.com/rodrigo/task-manager',
      stars: 32,
      forks: 8
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      category: 'mobile',
      description: 'Aplicación móvil para consultar el clima con pronósticos detallados y alertas meteorológicas.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop',
      technologies: ['React Native', 'Redux', 'OpenWeather API'],
      liveUrl: null,
      githubUrl: 'https://github.com/rodrigo/weather-app',
      stars: 28,
      forks: 6
    },
    {
      id: 4,
      title: 'Blog Platform',
      category: 'fullstack',
      description: 'Plataforma de blogs con editor de texto enriquecido, comentarios y sistema de categorías.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      liveUrl: 'https://blog-platform-demo.com',
      githubUrl: 'https://github.com/rodrigo/blog-platform',
      stars: 38,
      forks: 15
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Sitio web de portafolio personal con diseño responsivo y animaciones suaves.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      liveUrl: 'https://rodrigo-portfolio.com',
      githubUrl: 'https://github.com/rodrigo/portfolio',
      stars: 22,
      forks: 5
    },
    {
      id: 6,
      title: 'Chat Application',
      category: 'fullstack',
      description: 'Aplicación de chat en tiempo real con salas privadas, emojis y compartir archivos.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=200&fit=crop',
      technologies: ['Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: 'https://chat-app-demo.com',
      githubUrl: 'https://github.com/rodrigo/chat-app',
      stars: 51,
      forks: 18
    }
  ];
  
  filteredProjects = [...this.projects];
  
  filterProjects(category: string) {
    this.activeFilter = category;
    if (category === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }
  
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
