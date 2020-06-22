import { TestBed } from '@angular/core/testing';

import { PeopleListRemoteService } from './people-list-remote.service';
import { HttpClientModule } from '@angular/common/http';

describe('PeopleListRemoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
  }));

  it('should be created', () => {
    const service: PeopleListRemoteService = TestBed.get(PeopleListRemoteService);
    expect(service).toBeTruthy();
  });
});
