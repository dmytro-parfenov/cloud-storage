import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {PageHeaderService} from '../../core/page-header.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'cs-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StubComponent implements OnInit, OnDestroy {

  readonly pageTitle: string;

  constructor(private readonly pageHeaderService: PageHeaderService,
              private readonly activatedRoute: ActivatedRoute) {
    this.pageTitle = this.activatedRoute.snapshot.data.pageTitle || '';
  }

  ngOnInit(): void {
    this.pageHeaderService.add(this.pageTitle);
  }

  ngOnDestroy(): void {
    this.pageHeaderService.remove(this.pageTitle);
  }

}
