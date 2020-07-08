import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'cs-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StubComponent implements OnInit {

  readonly pageTitle: string;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.pageTitle = (activatedRoute.snapshot.data.title as string) || '';
  }

  ngOnInit(): void {
  }

}
