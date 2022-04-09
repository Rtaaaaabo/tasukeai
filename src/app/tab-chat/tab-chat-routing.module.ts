import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabChatPage } from './tab-chat.page';

const routes: Routes = [
  {
    path: '',
    component: TabChatPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabChatPageRoutingModule { }
