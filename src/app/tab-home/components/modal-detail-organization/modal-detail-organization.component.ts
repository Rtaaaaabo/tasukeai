import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-detail-organization',
  templateUrl: './modal-detail-organization.component.html',
  styleUrls: ['./modal-detail-organization.component.scss'],
})
export class ModalDetailOrganizationComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { }

  dismissModal(): void {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

}
