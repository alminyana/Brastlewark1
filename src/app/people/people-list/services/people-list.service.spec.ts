import { TestBed } from '@angular/core/testing';

import { PeopleListService } from './people-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('PeopleListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
  }));

  it('should be created', () => {
    const service: PeopleListService = TestBed.get(PeopleListService);
    expect(service).toBeTruthy();
  });
});
