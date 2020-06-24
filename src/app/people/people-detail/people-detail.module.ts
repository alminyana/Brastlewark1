import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http/http';
import { PeopleDetailComponent } from './people-detail.component';
import { PeopleDetailService } from './people-detail.service';
import { ActivatedRoute } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        PeopleDetailComponent
    ],
    providers: [
        ActivatedRoute,
        PeopleDetailService
    ],
    exports: [
        PeopleDetailComponent
    ]
})
export class PeopleDetailModule { }
