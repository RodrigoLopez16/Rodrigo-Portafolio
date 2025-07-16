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
        { name: 'Angular', level: 90, icon: 'fab fa-angular' },
        { name: 'React', level: 85, icon: 'fab fa-react' },
        { name: 'TypeScript', level: 88, icon: 'fab fa-js-square' },
        { name: 'HTML5 & CSS3', level: 95, icon: 'fab fa-html5' },
        { name: 'Bootstrap', level: 92, icon: 'fab fa-bootstrap' }
      ]
    },
    {
      name: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', level: 87, icon: 'fab fa-node-js' },
        { name: 'Python', level: 83, icon: 'fab fa-python' },
        { name: 'Express.js', level: 85, icon: 'fas fa-code' },
        { name: 'MongoDB', level: 80, icon: 'fas fa-database' },
        { name: 'PostgreSQL', level: 82, icon: 'fas fa-database' }
      ]
    },
    {
      name: 'DevOps & Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', level: 90, icon: 'fab fa-git-alt' },
        { name: 'Docker', level: 78, icon: 'fab fa-docker' },
        { name: 'AWS', level: 75, icon: 'fab fa-aws' },
        { name: 'CI/CD', level: 80, icon: 'fas fa-cogs' },
        { name: 'Linux', level: 85, icon: 'fab fa-linux' }
      ]
    }
  ];

  tools = [
    { name: 'VS Code', icon: 'fas fa-code' },
    { name: 'Postman', icon: 'fas fa-paper-plane' },
    { name: 'Figma', icon: 'fab fa-figma' },
    { name: 'Jira', icon: 'fab fa-jira' },
    { name: 'Slack', icon: 'fab fa-slack' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'Trello', icon: 'fab fa-trello' },
    { name: 'Notion', icon: 'fas fa-sticky-note' }
  ];
}
