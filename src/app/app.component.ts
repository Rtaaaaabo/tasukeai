import { Component, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private zone: NgZone,
    private router: Router
  ) {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(100000, () => { });
      this.initializeApp();
    });
  }

  public initializeApp(): void {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      this.zone.run(() => {
        const slug = event.url.split('.app').pop();
        console.log('SLUG', slug);
        if (slug) {
          this.router.navigateByUrl(slug);
        }
      });
    });
  }
}
