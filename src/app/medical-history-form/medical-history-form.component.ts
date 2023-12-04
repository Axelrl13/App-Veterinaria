import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-history-form',
  templateUrl: './medical-history-form.component.html',
  styleUrls: ['./medical-history-form.component.css']
})
export class MedicalHistoryFormComponent {
  historialMedico: string; 

  constructor() {
    this.historialMedico = ''; // Inicialización en el constructor
  }
}
