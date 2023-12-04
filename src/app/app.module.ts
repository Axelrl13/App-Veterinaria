

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // Asegúrate de importar ReactiveFormsModule
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PetRegistrationFormComponent } from './pet-registration-form/pet-registration-form.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { MedicalHistoryFormComponent } from './medical-history-form/medical-history-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PetRegistrationFormComponent,
    AppointmentFormComponent,
    MedicalHistoryFormComponent,
    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule // Asegúrate de agregar ReactiveFormsModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
