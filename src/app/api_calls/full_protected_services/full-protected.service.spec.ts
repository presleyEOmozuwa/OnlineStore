import { TestBed } from '@angular/core/testing';

import { FullProtectedService } from './full-protected.service';

describe('FullProtectedService', () => {
  let service: FullProtectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullProtectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
