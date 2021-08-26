import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowResultsComponent } from './show-results/show-results.component';
import { inventoryService } from './services/inventory.service';
import { requestService } from './services/request.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ShowResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    inventoryService, requestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
