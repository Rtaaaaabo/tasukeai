import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailOrgPageRoutingModule } from './detail-org-routing.module';

import { DetailOrgPage } from './detail-org.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailOrgPageRoutingModule
  ],
  declarations: [DetailOrgPage]
})
export class DetailOrgPageModule {}
