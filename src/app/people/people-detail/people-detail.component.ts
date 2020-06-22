import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PeopleDetailService } from './people-detail.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  public selectedItem = undefined;
  public allItems = undefined;
  private id = 'id';
  private brastlewark = 'Brastlewark';

  constructor(
    private route: ActivatedRoute,
    private srv: PeopleDetailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDetailById();
  }

  async goToFriend(friend) {
    const items = await this.srv.getData();
    this.allItems = items[this.brastlewark];
    const selected = this.allItems.filter((one) => one.name === friend);

    console.log('selected::', selected[0]);

    // this.router.navigate(['people', { id: selected[0].id }]);
    // this.router.navigateByUrl(['people/', + selected[0].id]);
  }

  getDetailById(): void {
    this.selectedItem = undefined;

    this.route.params
      .subscribe(
        async (params: Params) => {
          const items = await this.srv.getItemById(+params[this.id]);

          this.selectedItem = items;
          console.log(this.selectedItem);
        }
      );
  }

}
