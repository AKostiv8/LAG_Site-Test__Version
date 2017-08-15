import { TestBed, inject } from '@angular/core/testing';

import { GwService } from './gw.service';

describe('GwService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GwService]
    });
  });

  it('should be created', inject([GwService], (service: GwService) => {
    expect(service).toBeTruthy();
  }));
});
