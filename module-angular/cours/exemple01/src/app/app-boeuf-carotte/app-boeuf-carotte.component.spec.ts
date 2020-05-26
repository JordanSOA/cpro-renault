import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBoeufCarotteComponent } from './app-boeuf-carotte.component';

describe('AppBoeufCarotteComponent', () => {
  let component: AppBoeufCarotteComponent;
  let fixture: ComponentFixture<AppBoeufCarotteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBoeufCarotteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBoeufCarotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
