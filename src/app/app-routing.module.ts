import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeopleComponent, children: [
    // { path: ':id', component: PeopleDetailComponent }
  ] },
  { path: 'people/:id', component: PeopleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
