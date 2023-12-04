// appointment-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup; // Añadí el operador de inicialización aquí

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      paciente: ['', Validators.required],
      fecha: ['', Validators.required],
      motivo: ['', Validators.required]
      // Puedes agregar más campos según tus necesidades
    });
  }

  agendarCita() {
    // Lógica para procesar el formulario de cita
    console.log('Cita agendada:', this.appointmentForm.value);
  }
}
