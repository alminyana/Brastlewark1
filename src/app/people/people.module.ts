import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleListItemComponent } from './people-list-item/people-list-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PeopleComponent,
        PeopleListComponent,
        PeopleListItemComponent,
    ],
    providers: [],
    exports: [
        PeopleComponent
    ]
})
export class PeopleModule { }
