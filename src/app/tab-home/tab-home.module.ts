import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabHomePage } from '@/tab-home/tab-home.page';
import { CategorySlideComponent } from '@/tab-home/components/category-slide/category-slide.component';
import { TabHomePageRoutingModule } from '@/tab-home/tab-home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabHomePageRoutingModule
  ],
  exports: [CategorySlideComponent],
  declarations: [
    TabHomePage,
    CategorySlideComponent
  ]
})
export class TabHomePageModule { }
