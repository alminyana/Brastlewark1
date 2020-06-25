import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListItemComponent } from './people-list-item.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PeopleListItemComponent', () => {
  let component: PeopleListItemComponent;
  let fixture: ComponentFixture<PeopleListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, RouterModule ],
      declarations: [ PeopleListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
