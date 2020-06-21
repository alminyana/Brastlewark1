import { Component, OnInit } from '@angular/core';
import { PeopleListService } from './services/people-list.service';
import { BrastlewarkItem } from '../model/brastlewark-item.interface';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public data;

  constructor(
    private srv: PeopleListService,
  ) { }

  async ngOnInit() {
    this.data = await this.srv.getData();
    console.log(this.data);
  }

}
