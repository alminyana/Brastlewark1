import { Injectable } from '@angular/core';
import { PeopleListRemoteService } from './people-list-remote.service';
import { BRASTLEWARK } from '../../constant/people-list-constant';
import { BrastlewarkItem } from '../../model/brastlewark-item.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleListService {

  private data: BrastlewarkItem[];
  constructor(
    private remote: PeopleListRemoteService
  ) { }

  public async getData() {
    const data = await this.remote.getData();

    this.data = data[BRASTLEWARK];

    return data[BRASTLEWARK];
  }

}
