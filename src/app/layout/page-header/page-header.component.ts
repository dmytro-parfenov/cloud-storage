import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PageHeaderService} from '../../core/page-header.service';

@Component({
  selector: 'cs-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent implements OnInit {

  readonly title$: Observable<string> = this.pageHeaderService.titles$.pipe(
    map(titles => titles.join(' / '))
  );

  readonly visible$ = this.title$.pipe(
    map(title => !!title)
  );

  constructor(private readonly pageHeaderService: PageHeaderService) { }

  ngOnInit(): void {
  }

}
