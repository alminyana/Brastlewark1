import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BRASTLEWARK_URL } from '../../constant/people-list-constant';

@Injectable({
  providedIn: 'root'
})
export class PeopleListRemoteService {

  constructor(
    private http: HttpClient
  ) { }

  public async getData() {
    return this.http.get(BRASTLEWARK_URL.GET).toPromise();
  }

}
