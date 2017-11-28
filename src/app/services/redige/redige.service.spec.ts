import { TestBed, inject } from '@angular/core/testing';

import { RedigeService } from './redige.service';

describe('RedigeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedigeService]
    });
  });

  it('should be created', inject([RedigeService], (service: RedigeService) => {
    expect(service).toBeTruthy();
  }));
});
