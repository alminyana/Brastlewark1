import { TestBed } from '@angular/core/testing';

import { PeopleDetailService } from './people-detail.service';
import { HttpClientModule } from '@angular/common/http';
import { PeopleListRemoteService } from '../people-list/services/people-list-remote.service';

describe('PeopleDetailService', () => {
  let services;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });

    initServices();
  }
  );

  it('should be created', () => {
    const service: PeopleDetailService = TestBed.get(PeopleDetailService);
    expect(service).toBeTruthy();
  });

  it('should exist correct service in constructor when service is initialized', () => {
      const service: PeopleDetailService = TestBed.get(PeopleDetailService);
      expect(service.remote).toEqual(services.remote);
  });

  function initServices() {
      services = {
          remote: TestBed.get(PeopleListRemoteService)
      };
  }
});
