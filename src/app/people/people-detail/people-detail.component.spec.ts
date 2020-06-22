import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailComponent } from './people-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PeopleDetailService } from './people-detail.service';

describe('PeopleDetailComponent', () => {
  let component: PeopleDetailComponent;
  let fixture: ComponentFixture<PeopleDetailComponent>;
  let services;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, RouterModule, HttpClientModule ],
      declarations: [ PeopleDetailComponent ]
    })
    .compileComponents();

    initServices();
    fixture = TestBed.createComponent(PeopleDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.get(PeopleDetailService, null);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    initServices();
    fixture = TestBed.createComponent(PeopleDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.get(PeopleDetailService, null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist correct service in constructor when component is initialized', () => {
      expect(component.srv).toEqual(services.srv);
  });

  function initServices() {
      services = {
          srv: TestBed.get(PeopleDetailService),
      };
  }
});
