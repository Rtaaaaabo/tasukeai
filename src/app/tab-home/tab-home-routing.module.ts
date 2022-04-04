import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabHomePage } from './tab-home.page';

const routes: Routes = [
  {
    path: '',
    component: TabHomePage,
  },
  {
    path: 'detail-org',
    loadChildren: () => import('./pages/detail-org/detail-org.module').then( m => m.DetailOrgPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabHomePageRoutingModule { }
