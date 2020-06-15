import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExosComponent } from './exos.component';

describe('ExosComponent', () => {
  let component: ExosComponent;
  let fixture: ComponentFixture<ExosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
