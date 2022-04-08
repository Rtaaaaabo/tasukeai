import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalDetailOrganizationComponent } from '@/tab-home/components/modal-detail-organization/modal-detail-organization.component';

@Component({
  selector: 'app-list-timeline',
  templateUrl: './list-timeline.component.html',
  styleUrls: ['./list-timeline.component.scss'],
})
export class ListTimelineComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { }

  public navigateToDetail(orgId: number): void {
    this.router.navigate(['detail-org', orgId], { relativeTo: this.route });
  }

  public async presentDetailModal(orgId: number): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalDetailOrganizationComponent,
      componentProps: {
        orgId,
      },
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop()
    });
    return await modal.present();
  }

}
