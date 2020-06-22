import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleListItemComponent } from './people-list-item/people-list-item.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    declarations: [
        PeopleComponent,
        PeopleListComponent,
        PeopleListItemComponent,
        PeopleDetailComponent,
    ],
    providers: [],
    exports: [
        PeopleComponent
    ]
})
export class PeopleModule { }
