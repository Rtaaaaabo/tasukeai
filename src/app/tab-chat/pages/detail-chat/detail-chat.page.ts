import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-chat',
  templateUrl: './detail-chat.page.html',
  styleUrls: ['./detail-chat.page.scss'],
})
export class DetailChatPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(
  ) {
  }

  public backToListChatPage(): void {
    this.location.back();
  }
}
