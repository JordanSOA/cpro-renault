import { TestBed } from '@angular/core/testing';

import { CoucouService } from './coucou.service';

describe('CoucouService', () => {
  let service: CoucouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoucouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
