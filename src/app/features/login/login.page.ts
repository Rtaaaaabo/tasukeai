import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { of } from 'rxjs';
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
  }

  public onClickLoginWithLine(): void {
    this.imageZone = '../../../assets/img/btn_login_press.png';
    of(Auth.federatedSignIn({ customProvider: 'LINE' })).subscribe((data) => {
      console.log('Login Success');
    });
  }

  public navigateToSignUp(): void {

  }

}
