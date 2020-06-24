import { TestBed, inject } from '@angular/core/testing';

import { PeopleListService } from './people-list.service';
import { HttpClientModule } from '@angular/common/http';
import { PeopleListRemoteService } from './people-list-remote.service';

describe('PeopleListService', () => {
  let services;
  let service: PeopleListService;
  let spies;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
    });

    initServices();
    service = TestBed.get(PeopleListService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should exist correct service in constructor when service is initialized', () => {
    inject([PeopleListService], (injectedServ: PeopleListService) => {
      expect(injectedServ).toBe(service);
    });
  });

  it('should call remote service when getData method is fired', () => {
    spies.remote.getData();

    service.getData();

    expect(spies.remote.getData.calls.count()).toBeTruthy();
  });

  function initServices() {
      services = {
          remote: TestBed.get(PeopleListRemoteService)
      };

      initSpies();
  }

  function initSpies() {
      spies = {
          remote: {
            getData: spyOn(services.remote, 'getData'),
          }
      };
  }

});
