import { TestBed } from '@angular/core/testing';

import { SuperProtectorGuard } from './super-protector.guard';

describe('SuperProtectorGuard', () => {
  let guard: SuperProtectorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuperProtectorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
