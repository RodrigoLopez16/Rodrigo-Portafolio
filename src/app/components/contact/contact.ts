import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simular envío de formulario
      setTimeout(() => {
        console.log('Formulario enviado:', this.contactForm.value);
        
        // Aquí implementarías la lógica para enviar el formulario
        // Por ejemplo, hacer una petición HTTP a tu backend
        
        this.isSubmitting = false;
        this.contactForm.reset();
        
        // Mostrar mensaje de éxito
        alert('¡Mensaje enviado correctamente! Te responderé pronto.');
      }, 2000);
    } else {
      // Marcar todos los campos como tocados para mostrar los errores
      this.contactForm.markAllAsTouched();
    }
  }
}
