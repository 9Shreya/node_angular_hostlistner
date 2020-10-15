import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersComponent} from './customers.component';
import {ChildComponent} from './child/child.component';
import {DirectDirective} from './direct.directive';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CustomersComponent,ChildComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,NgbModule,FormsModule
  ]
})
export class CustomersModule {}
