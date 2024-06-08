import { TestBed } from '@angular/core/testing';

import { ReusableshareService } from './reusableshare.service';

describe('ReusableshareService', () => {
  let service: ReusableshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
