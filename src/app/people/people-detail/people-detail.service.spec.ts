import { TestBed } from '@angular/core/testing';

import { PeopleDetailService } from './people-detail.service';

describe('PeopleDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleDetailService = TestBed.get(PeopleDetailService);
    expect(service).toBeTruthy();
  });
});
