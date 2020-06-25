import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list.component';
import { PeopleListService } from './services/people-list.service';
import { PeopleListRemoteService } from './services/people-list-remote.service';
import { HttpClientModule } from '@angular/common/http';
import { PeopleListItemComponent } from '../people-list-item/people-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        PeopleListComponent,
        PeopleListItemComponent
    ],
    providers: [
        PeopleListService,
        PeopleListRemoteService
    ],
    exports: [
        PeopleListComponent
    ]
})
export class PeopleListModule { }
