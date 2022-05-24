import { AfterViewInit, Directive, Input, Renderer2, HostListener } from '@angular/core';
import { DomController, isPlatform } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements AfterViewInit {
  @Input('appHideHeader') header: any;
  private headerHeight = isPlatform('ios') ? 44 : 56;
  private children: any;

  public constructor(private renderer: Renderer2, private domController: DomController) { }

  @HostListener('ionScroll', ['$event']) public onContentScroll($event: any) {
    const scrollTop: number = $event.detail.scrollTop;
    let newPosition = -scrollTop;

    if (newPosition < -this.headerHeight) {
      newPosition = -this.headerHeight;
    }

    const newOpacity = 1 - (newPosition / -this.headerHeight);

    this.domController.write(() => {
      this.renderer.setStyle(this.header, 'top', newPosition + 'px');
      for (const c of this.children) {
        this.renderer.setStyle(c, 'opacity', newOpacity);
      }
    });
  }

  public ngAfterViewInit(): void {
    this.header = this.header.el;
    this.children = this.header.children;
  }


}
