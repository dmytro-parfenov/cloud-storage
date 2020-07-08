import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageHeader} from '../../core/page-header';

@Component({
  selector: 'cs-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StubComponent implements OnInit {

  pageTitle = '';

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.onRouterDataChange(data as PageHeader));
  }

  private onRouterDataChange(data: PageHeader): void {
    this.pageTitle = data.title;

    this.changeDetectorRef.markForCheck();
  }

}
