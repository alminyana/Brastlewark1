import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PeopleDetailService } from './people-detail.service';
import { ID, BRASTLEWARK } from '../constant/people-list-constant';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as ListActions from '../../../actions/brastlewark.actions';
import { BrastlewarkItem } from '../model/brastlewark-item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  public selectedItem$: Observable<BrastlewarkItem[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private srv: PeopleDetailService,
    private store: Store<AppState>
  ) {
    this.selectedItem$ = this.store.select('list');
  }

  ngOnInit() {
    this.getDetailById();
  }

  goToList() {
    this.router.navigateByUrl('people');
  }

  getDetailById(): void {
    this.route.params
      .subscribe(
        async (params: Params) => {
          this.store.dispatch(new ListActions.GetById(+params[ID]));
        }
      );
  }

}
