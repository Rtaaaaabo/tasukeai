import { Directive, HostListener, Input, Renderer2, AfterViewInit } from '@angular/core';
import { DomController, isPlatform } from '@ionic/angular';

@Directive({
  selector: '[appCategorySlide]'
})
export class CategorySlideDirective implements AfterViewInit {
  @Input('appCategorySlide') categoryControl: any;
  private headerHeight = isPlatform('ios') ? 44 : 56;

  public constructor(
    private renderer: Renderer2,
    private domController: DomController,
  ) { }
  @HostListener('ionScroll', ['$event']) public onContentScroll($event: any) {
    const scrollTop: number = $event.detail.scrollTop;
    let newPosition = -scrollTop;

    if (newPosition < -this.headerHeight) {
      newPosition = this.headerHeight;
    }
    this.domController.write(() => {
      this.renderer.setStyle(this.categoryControl, 'top', newPosition + 'px');
    });
  }

  public ngAfterViewInit() {
    this.categoryControl = this.categoryControl.el;
  }

}
