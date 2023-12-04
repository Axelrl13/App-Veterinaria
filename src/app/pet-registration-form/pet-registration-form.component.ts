// pet-registration-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-registration-form',
  templateUrl: './pet-registration-form.component.html',
  styleUrls: ['./pet-registration-form.component.css']
})
export class PetRegistrationFormComponent {
  petRegistrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.petRegistrationForm = this.fb.group({
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
      edad: ['', Validators.required]
      // Puedes agregar más campos y validadores según tus necesidades
    });
  }

  registrarMascota() {
    // Lógica para registrar la mascota, puedes enviar los datos al servidor aquí
    console.log('Mascota registrada:', this.petRegistrationForm.value);
  }
}
