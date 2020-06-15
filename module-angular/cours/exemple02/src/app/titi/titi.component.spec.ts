import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitiComponent } from './titi.component';

describe('TitiComponent', () => {
  let component: TitiComponent;
  let fixture: ComponentFixture<TitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
