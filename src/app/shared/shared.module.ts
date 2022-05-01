import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorySlideDirective } from '@/shared/directives/category-slide/category-slide.directive';
import { HideHeaderDirective } from '@/shared/directives/hide-header/hide-header.directive';

@NgModule({
  declarations: [CategorySlideDirective, HideHeaderDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CategorySlideDirective, HideHeaderDirective
  ],
})
export class SharedModule { }
