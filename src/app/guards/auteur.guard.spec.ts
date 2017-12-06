import { TestBed, async, inject } from '@angular/core/testing';

import { AuteurGuard } from './auteur.guard';

describe('AuteurGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuteurGuard]
    });
  });

  it('should ...', inject([AuteurGuard], (guard: AuteurGuard) => {
    expect(guard).toBeTruthy();
  }));
});
