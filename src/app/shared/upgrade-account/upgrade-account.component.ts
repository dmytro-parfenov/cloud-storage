import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cs-upgrade-account',
  templateUrl: './upgrade-account.component.html',
  styleUrls: ['./upgrade-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
