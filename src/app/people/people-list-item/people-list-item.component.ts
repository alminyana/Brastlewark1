import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html',
  styleUrls: ['./people-list-item.component.scss']
})
export class PeopleListItemComponent {

  @Input() public item;

  constructor() { }

}
