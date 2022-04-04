import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailOrgPage } from './detail-org.page';

const routes: Routes = [
  {
    path: ':orgId',
    component: DetailOrgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailOrgPageRoutingModule { }
