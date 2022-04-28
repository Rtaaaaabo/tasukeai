import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('imageBtn') imageBtnEl: ElementRef<HTMLButtonElement>;

  public imageZone: string;

  constructor(
  ) { }

  ngOnInit() {
    this.imageZone = '../../../assets/img/btn_login_base.png';
    of(Auth.currentAuthenticatedUser()).subscribe(data => console.log('Login', data));
  }

  public onClickLoginWithLine(): void {
    this.imageZone = '../../../assets/img/btn_login_press.png';
    of(Auth.federatedSignIn({ customProvider: 'LINE' }))
      .pipe(concatMap(() => of(Auth.currentAuthenticatedUser())))
      .subscribe((data) => {
        console.log('currentAuthenticatedUser', data);
      });
  }

  public navigateToSignUp(): void {

  }

}
