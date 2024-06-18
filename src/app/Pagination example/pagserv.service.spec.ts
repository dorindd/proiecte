import { TestBed } from '@angular/core/testing';

import { PagservService } from './pagserv.service';

describe('PagservService', () => {
  let service: PagservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
