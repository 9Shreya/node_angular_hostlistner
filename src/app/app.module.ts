import {CustomersModule} from './customers/customers.module';

import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {DataService} from './service/data.service';
import {DirectDirective} from './customers/direct.directive';

@NgModule({
  declarations: [AppComponent,DirectDirective],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule,CustomersModule,NgbModule,FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
