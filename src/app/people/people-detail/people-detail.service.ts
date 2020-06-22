import { Injectable } from '@angular/core';
import { PeopleListRemoteService } from '../people-list/services/people-list-remote.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleDetailService {

  listName = 'Brastlewark';

  constructor(
    private remote: PeopleListRemoteService
  ) { }

  public async getData() {
    const data = await this.remote.getData();

    return data;
  }

  public async getItemById(id) {
    const items = await this.remote.getData();
    const list = items[this.listName];

    const selected = list.filter(item => item.id === id);

    return selected[0];
  }

}
