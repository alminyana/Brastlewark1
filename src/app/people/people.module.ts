import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PeopleComponent
    ],
    providers: [],
    exports: [
        PeopleComponent
    ]
})
export class PeopleModule { }
