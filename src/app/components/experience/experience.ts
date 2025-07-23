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
      position: 'Bilingual Voice Agent',
      company: 'TransUnion',
      period: 'Noviembre 2024 - Presente',
      location: 'Remoto',
      icon: 'fas fa-laptop-code',
      description: 'Ayudando a consumidores en Estados Unidos a resolver problemas relacionados con su crédito, accediendo a sus servicios en línea o con problemas acerca de sus informes crediticios.',
      technologies: ['Salesforce', 'Microsoft Teams']
    },
    {
      position: 'Global Customer Service Agent',
      company: 'Equifax',
      period: 'Julio 2024 - Octubre 2024',
      location: 'Heredia - Costa Rica',
      icon: 'fas fa-code',
      description: 'Ayudando a consumidores en Estados Unidos a resolver problemas relacionados con su crédito, accediendo a sus servicios en línea o con problemas acerca de sus informes crediticios.',
      technologies: ['Salesforce', 'Google workspace', 'CRM de IBM']
    },
    {
      position: 'Back office Agent',
      company: 'United Collection Bureau',
      period: 'Abril 2021 - Julio 2024',
      location: 'Heredia - Costa Rica - Remoto',
      icon: 'fas fa-rocket',
      description: 'Primer trabajando, ayudando al procesamiento de facturas médicas de pacientes en Estados Unidos, para hospitales como Spectrum Health, Souther Ohio Medical Center y Baptist Hospital.',
      technologies: ['EPIC', 'Microsoft teams', 'Meditech', 'Availity']
    }
  ];
}
