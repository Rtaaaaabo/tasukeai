import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-timeline',
  templateUrl: './list-timeline.component.html',
  styleUrls: ['./list-timeline.component.scss'],
})
export class ListTimelineComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() { }

  public navigateToDetail(orgId: number): void {
    this.router.navigate(['detail-org', orgId], { relativeTo: this.route });
  }

}
