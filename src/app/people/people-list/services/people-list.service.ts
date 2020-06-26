import { Injectable } from '@angular/core';
import { PeopleListRemoteService } from './people-list-remote.service';
import { BRASTLEWARK } from '../../constant/people-list-constant';
import { BrastlewarkItem } from '../../model/brastlewark-item.interface';
import { Store } from '@ngrx/store';
import * as ListActions from '../../../../actions/brastlewark.actions';

@Injectable({
  providedIn: 'root'
})
export class PeopleListService {

  private data: BrastlewarkItem[];
  constructor(
    private remote: PeopleListRemoteService,
    private store: Store
  ) { }

  public async getData() {
    if (!this.data) {
      const data = await this.remote.getData();

      this.data = data[BRASTLEWARK];

      this.store.dispatch(new ListActions.NewList(this.data));

      return this.data;
    } else {
      this.store.dispatch(new ListActions.NewList(this.data));

      return this.data;
    }
  }

}
