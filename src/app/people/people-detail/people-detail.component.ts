import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PeopleDetailService } from './people-detail.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  public selectedItem = undefined;
  private id = 'id';

  constructor(
    private route: ActivatedRoute,
    private srv: PeopleDetailService
  ) { }

  ngOnInit() {
    this.getDetailById();
  }

  getDetailById() {
    this.selectedItem =undefined;

    this.route.params
      .subscribe(
        async (params: Params) => {
          const item = await this.srv.getItemById(+params[this.id]);

          this.selectedItem = item;
          console.log(this.selectedItem);
        }
      );
  }

}
