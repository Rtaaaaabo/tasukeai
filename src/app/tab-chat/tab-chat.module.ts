import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabChatPage } from './tab-chat.page';

import { TabChatPageRoutingModule } from './tab-chat-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabChatPageRoutingModule
  ],
  declarations: [TabChatPage]
})
export class TabChatPageModule { }
