import { TestBed } from '@angular/core/testing';

import { PeopleListRemoteService } from './people-list-remote.service';

describe('PeopleListRemoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleListRemoteService = TestBed.get(PeopleListRemoteService);
    expect(service).toBeTruthy();
  });
});
