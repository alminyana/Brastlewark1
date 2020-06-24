import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { PeopleDetailService } from '../people-detail.service';
import { PeopleListService } from '../../people-list/services/people-list.service';
import { PeopleListRemoteService } from '../../people-list/services/people-list-remote.service';
import { PeopleListRemoteServiceMock } from '../../people-list/services/people-list-remote.service.mock';

describe('PeopleDetailService', () => {
  let services;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        {
          provide: PeopleListRemoteService,
          useClass: PeopleListRemoteServiceMock,
      }
      ],
    });

    initServices();
  }
  );

  it('should be created', () => {
    const service: PeopleDetailService = TestBed.get(PeopleDetailService);
    expect(service).toBeTruthy();
  });

  it('should exist correct service in constructor when service is initialized', () => {
    const serv: PeopleDetailService = TestBed.get(PeopleDetailService);

    inject([PeopleDetailService], (injectedServ: PeopleDetailService) => {
      expect(injectedServ).toBe(serv);
    });
  });

  function initServices() {
      services = {
          remote: TestBed.get(PeopleListRemoteService)
      };
  }
});
