import {NgModule} from '@angular/core';
import {StubComponent} from './stub/stub.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [StubComponent],
  exports: [StubComponent],
  imports: [
    SharedModule
  ]
})
export class LayoutModule { }
