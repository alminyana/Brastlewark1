import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { PeopleDetailViewComponent } from './people-detail-view.component';
import { PeopleDetailModule } from '../people/people-detail/people-detail.module';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        PeopleDetailModule
    ],
    declarations: [
        PeopleDetailViewComponent,
    ],
    providers: [],
    exports: [
        PeopleDetailViewComponent
    ]
})
export class PeopleDetailViewModule { }
