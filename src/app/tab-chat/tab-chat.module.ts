import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabChatPage } from '@/tab-chat/tab-chat.page';
import { ListChatComponent } from '@/tab-chat/components/list-chat/list-chat.component';
import { TabChatPageRoutingModule } from '@/tab-chat/tab-chat-routing.module';
import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    TabChatPageRoutingModule,
    AutosizeModule,
  ],
  exports: [ListChatComponent],
  declarations: [TabChatPage, ListChatComponent]
})
export class TabChatPageModule { }
