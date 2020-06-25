import { Component, OnInit } from '@angular/core';
import { PeopleListService } from './services/people-list.service';
import { BrastlewarkItem } from '../model/brastlewark-item.interface';
import { Router } from '@angular/router';
import { prependOnceListener } from 'process';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public filteredData: BrastlewarkItem[];
  private data: BrastlewarkItem[];
  public listMode = true;

  constructor(
    private srv: PeopleListService,
    private router: Router
  ) { }

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
