import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetRegistrationFormComponent } from './pet-registration-form.component';

describe('PetRegistrationFormComponent', () => {
  let component: PetRegistrationFormComponent;
  let fixture: ComponentFixture<PetRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetRegistrationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
