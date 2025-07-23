import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skillCategories = [
    {
      name: 'Frontend',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'Angular',  icon: 'fab fa-angular' },
        { name: 'Tailwind CSS', icon: 'fab fa-css3' },
        { name: 'TypeScript', icon: 'fab fa-js-square' },
        { name: 'HTML5 & CSS3', icon: 'fab fa-html5' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
      ]
    },
    {
      name: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js',  icon: 'fab fa-node-js' },
        { name: 'C#', icon: 'fab fa-microsoft' },
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'MySQL', icon: 'fas fa-database' }
      ]
    },
    {
      name: 'DevOps & Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git',  icon: 'fab fa-git-alt' }
      ]
    }
  ];

  tools = [
    { name: 'VS Code', icon: 'fas fa-code' },
    { name: 'Insomnia', icon: 'fas fa-paper-plane' },
    { name: 'Figma', icon: 'fab fa-figma' },
    { name: 'Jira', icon: 'fab fa-jira' },
    { name: 'Slack', icon: 'fab fa-slack' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'IntelliJ IDEA', icon: 'fab fa-java' }
  ];

  softSkills = [
    { name: 'Trabajo en Equipo', icon: 'fas fa-users' },
    { name: 'Comunicación Efectiva', icon: 'fas fa-comments' },
    { name: 'Resolución de Problemas', icon: 'fas fa-lightbulb' },
    { name: 'Adaptabilidad', icon: 'fas fa-exchange-alt' },
    { name: 'Pensamiento Crítico', icon: 'fas fa-brain' },
    { name: 'Gestión del Tiempo', icon: 'fas fa-clock' },
    { name: 'Liderazgo', icon: 'fas fa-crown' },
    { name: 'Creatividad', icon: 'fas fa-palette' }
  ];
}
