import { TestBed } from '@angular/core/testing';

import { WithdrowService } from './withdrow.service';

describe('WithdrowService', () => {
  let service: WithdrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithdrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
