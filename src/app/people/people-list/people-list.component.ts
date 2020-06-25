import { Component, OnInit } from '@angular/core';
import { PeopleListService } from './services/people-list.service';
import { BrastlewarkItem } from '../model/brastlewark-item.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public filteredData: BrastlewarkItem[];
  private data: BrastlewarkItem[];
  public listMode = true;
  public filtered$: Observable<BrastlewarkItem[]>;

  constructor(
    private srv: PeopleListService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.filtered$ = this.store.select('list');
    console.log('filtered$', this.filtered$);
  }

  async ngOnInit() {
    this.data = await this.srv.getData();
    this.filteredData = this.data;
  }

  public updateMode() {
    this.listMode = false;
  }

  filterNoItems(search) {
    this.filteredData = this.data.filter((person) => person[search].length === 0 || !person[search]);
  }

  filterWithItems(search) {
    this.filteredData = this.data.filter((person) => person[search].length > 0);
  }

  public goToList() {
    this.listMode = true;
    this.router.navigateByUrl('people');
  }
}
