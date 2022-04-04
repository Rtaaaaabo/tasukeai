import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabHomePage } from '@/tab-home/tab-home.page';
import { CategorySlideComponent } from '@/tab-home/components/category-slide/category-slide.component';
import { TabHomePageRoutingModule } from '@/tab-home/tab-home-routing.module';
import { ListTimelineComponent } from '@/tab-home/components/list-timeline/list-timeline.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabHomePageRoutingModule
  ],
  exports: [
    CategorySlideComponent,
    ListTimelineComponent,
  ],
  declarations: [
    TabHomePage,
    CategorySlideComponent,
    ListTimelineComponent
  ]
})
export class TabHomePageModule { }
