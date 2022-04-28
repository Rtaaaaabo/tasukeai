import { Component, OnInit } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { of } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

  public signupWithLine() {
    of(Auth.federatedSignIn({ customProvider: 'Line' })).subscribe((result) => {
      console.log('signupWithLine', result);
    });
  }

}
