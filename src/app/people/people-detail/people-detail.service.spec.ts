import { TestBed } from '@angular/core/testing';

import { PeopleDetailService } from './people-detail.service';
import { HttpClientModule } from '@angular/common/http';

describe('PeopleDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
  }));

  it('should be created', () => {
    const service: PeopleDetailService = TestBed.get(PeopleDetailService);
    expect(service).toBeTruthy();
  });
});
