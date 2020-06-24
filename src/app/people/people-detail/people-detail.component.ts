import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PeopleDetailService } from './people-detail.service';
import { ID, BRASTLEWARK } from '../constant/people-list-constant';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  public selectedItem;
  public allItems;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private srv: PeopleDetailService
  ) { }

  ngOnInit() {
    this.getDetailById();
  }

  async goToFriend(friend) {
    const items = await this.srv.getData();
    this.allItems = items[BRASTLEWARK];
    const selected = this.allItems.filter((one) => one.name === friend);

  }

  goToList() {
    this.router.navigateByUrl('people');
  }

  getDetailById(): void {
    this.selectedItem = undefined;

    this.route.params
      .subscribe(
        async (params: Params) => {
          const items = await this.srv.getItemById(+params[ID]);

          this.selectedItem = items;
        }
      );
  }

}
