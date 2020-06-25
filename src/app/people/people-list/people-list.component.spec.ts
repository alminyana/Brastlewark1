import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListComponent } from './people-list.component';
import { PeopleListItemComponent } from '../people-list-item/people-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PeopleListService } from './services/people-list.service';

describe('PeopleListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;
  let service;
  let services;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, RouterModule, HttpClientModule ],
      declarations: [ PeopleListComponent, PeopleListItemComponent ]
    })
    .compileComponents();

    initServices();
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(PeopleListService, null);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    initServices();
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(PeopleListService, null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should service call getData method when component is initialized', () => {
    spyOn(service, 'getData')
    .and
    .callThrough();

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.getData).toHaveBeenCalled();
});

  function initServices() {
    services = {
        srv: TestBed.get(PeopleListService),
    };
}
});
