import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './shared/page/head/head.component';
import { MainComponent } from './shared/page/main/main.component';
import { PurchaseCardComponent } from './purchase/purchase-card/purchase-card.component';
import { PurchaseEditComponent } from './purchase/purchase-edit/purchase-edit.component';
import { PurchaseLayoutComponent } from './purchase/purchase-layout/purchase-layout.component';
import { PurchaseListComponent } from './purchase/purchase-list/purchase-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
