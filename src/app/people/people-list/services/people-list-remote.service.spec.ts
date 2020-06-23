import { TestBed } from '@angular/core/testing';

import { PeopleListRemoteService } from './people-list-remote.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('PeopleListRemoteService', () => {
  let services;
  let spies;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
    });

    initServices();
  });

  it('should be created', () => {
    const service: PeopleListRemoteService = TestBed.get(PeopleListRemoteService);
    expect(service).toBeTruthy();
  });

  it('should exist httpClient service in constructor when service is initialized', () => {
    const service: PeopleListRemoteService = TestBed.get(PeopleListRemoteService);
    expect(service.http).toEqual(services.http);
  });

  it('should call httpClient service when getData method is fired', () => {
    const service: PeopleListRemoteService = TestBed.get(PeopleListRemoteService);

    spies.http.getData();

    service.getData();

    expect(spies.http.getData.calls.count()).toBeTruthy();
  });

  function initServices() {
      services = {
          http: TestBed.get(HttpClient)
      };

      initSpies();
  }

  function initSpies() {
      spies = {
          http: {
              getData: spyOn(services.http, 'get'),
          }
      };
  }
});
