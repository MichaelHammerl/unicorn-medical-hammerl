import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SearchService} from "./core/services/search.service";
import {AppRoutingModule} from "./app.routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutModule} from "./core/layout/layout.module";
import { SearchComponent } from './search/search.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { ShufflePipe } from './shuffle.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    DashboardComponent,
    SearchComponent,
    ShufflePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
