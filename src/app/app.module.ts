import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
// import { TablerIconsModule } from 'angular-tabler-icons';
// import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // TablerIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
