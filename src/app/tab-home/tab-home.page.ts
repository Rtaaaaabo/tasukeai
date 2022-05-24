import { Component } from '@angular/core';
import { Category } from '@/tab-home/models/category';
import { Auth } from 'aws-amplify';
import { of } from 'rxjs';

@Component({
  selector: 'app-tab-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss']
})
export class TabHomePage {
  public targetItem: Category = { value: 0, name: 'テスト000' };

  constructor() { }

  public chooseCategory(ev: Category): void {
    this.targetItem = ev;
  }

  public logout(): void {
    of(Auth.signOut()).subscribe((data) => console.log('SignOut', data));
  }

}
