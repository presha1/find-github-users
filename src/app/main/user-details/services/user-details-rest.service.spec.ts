import { TestBed } from '@angular/core/testing';

import { UserDetailsRestService } from './user-details-rest.service';

describe('UserDetailsRestService', () => {
  let service: UserDetailsRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailsRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
