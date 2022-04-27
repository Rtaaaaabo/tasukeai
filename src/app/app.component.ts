import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Auth } from 'aws-amplify';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(100000, () => { });
    });
  }
}
