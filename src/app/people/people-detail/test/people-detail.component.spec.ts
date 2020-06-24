import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailComponent } from '../people-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PeopleDetailService } from '../people-detail.service';
import { PeopleDetailServiceMock } from './people-detail.service.mock';

describe('PeopleDetailComponent', () => {
  let component: PeopleDetailComponent;
  let fixture: ComponentFixture<PeopleDetailComponent>;
  let services;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, RouterModule, HttpClientModule ],
      declarations: [ PeopleDetailComponent ],
      providers: [
        {
          provide: PeopleDetailService,
          useClass: PeopleDetailServiceMock,
      }
      ],
    });
    TestBed.compileComponents();
    service = TestBed.get(PeopleDetailService, null);

    initServices();
    fixture = TestBed.createComponent(PeopleDetailComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailComponent);
    fixture.detectChanges();

    initServices();
    service = TestBed.get(PeopleDetailService, null);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getDetailById on component instance', () => {
    spyOn(component, 'getDetailById')
    .and
    .callThrough();

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.getDetailById).toHaveBeenCalled();

  });

  function initServices() {
      services = {
          srv: TestBed.get(PeopleDetailService),
      };
  }
});
