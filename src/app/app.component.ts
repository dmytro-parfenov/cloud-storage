import {Component} from '@angular/core';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  opened = false;

  toggle(): void {
    this.opened = !this.opened;
  }
}
