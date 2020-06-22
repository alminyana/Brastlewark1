import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list.component';
import { PeopleListService } from './services/people-list.service';
import { PeopleListRemoteService } from './services/people-list-remote.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        PeopleListComponent
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
