import { Component, OnInit } from '@angular/core';
import { PeopleListService } from './services/people-list.service';
import { BrastlewarkItem } from '../model/brastlewark-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public data;
  public listMode = true;

  constructor(
    private srv: PeopleListService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.data = await this.srv.getData();
  }

  public updateMode() {
    this.listMode = false;
  }

  public goToList() {
    this.listMode = true;
    this.router.navigateByUrl('people');
  }
}
