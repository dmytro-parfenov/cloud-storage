import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {PageHeaderService} from '../../core/page-header/page-header.service';
import {ActivatedRoute} from '@angular/router';
import {PageHeaderTitle} from '../../core/page-header/page-header-title';

@Component({
  selector: 'cs-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StubComponent implements OnInit, OnDestroy {

  readonly pageHeaderTitle: PageHeaderTitle;

  constructor(private readonly pageHeaderService: PageHeaderService,
              private readonly activatedRoute: ActivatedRoute) {
    this.pageHeaderTitle = new PageHeaderTitle(this.activatedRoute.snapshot.data.pageTitle || '');
  }

  ngOnInit(): void {
    this.pageHeaderService.add(this.pageHeaderTitle);
  }

  ngOnDestroy(): void {
    this.pageHeaderService.remove(title => title.id === this.pageHeaderTitle.id);
  }

}
