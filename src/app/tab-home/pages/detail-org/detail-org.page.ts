import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-org',
  templateUrl: './detail-org.page.html',
  styleUrls: ['./detail-org.page.scss'],
})
export class DetailOrgPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const orgIdFromRoute = Number(routeParam.get('orgId'));
  }

}
