import { TestBed } from '@angular/core/testing';

import { BoolsAndCowsService } from './bools-and-cows.service';

describe('BoolsAndCowsService', () => {
  let service: BoolsAndCowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoolsAndCowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
