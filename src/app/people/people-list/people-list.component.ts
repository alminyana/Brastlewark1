import { Component, OnInit } from '@angular/core';
import { PeopleListService } from './services/people-list.service';
import { BrastlewarkItem } from '../model/brastlewark-item.interface';
import { Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as ListActions from '../../../actions/brastlewark.actions';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  private data: BrastlewarkItem[];
  public listMode = true;
  public filtered$: Observable<BrastlewarkItem[]>;

  constructor(
    private srv: PeopleListService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.filtered$ = this.store.select('list');
  }

  async ngOnInit() {
    this.data = await this.srv.getData();
  }

  clearFilter() {
    this.store.dispatch(new ListActions.NewList(this.data));
  }

  filterItems(search, items) {
    this.store.dispatch(new ListActions.FilterList(search, items, this.data));
  }
}
