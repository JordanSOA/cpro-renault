import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTemplateDrivenComponent } from './registration-template-driven.component';

describe('RegistrationTemplateDrivenComponent', () => {
  let component: RegistrationTemplateDrivenComponent;
  let fixture: ComponentFixture<RegistrationTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
