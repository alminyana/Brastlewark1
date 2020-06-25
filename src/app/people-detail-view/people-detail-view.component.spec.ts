import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailViewComponent } from './people-detail-view.component';

describe('PeopleDetailViewComponent', () => {
  let component: PeopleDetailViewComponent;
  let fixture: ComponentFixture<PeopleDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
