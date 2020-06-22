import { Injectable } from '@angular/core';
import { PeopleListRemoteService } from './people-list-remote.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleListService {

  constructor(
    private remote: PeopleListRemoteService
  ) { }

  public async getData() {
    const data = await this.remote.getData();

    return data;
  }

}
