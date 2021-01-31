import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { GridModule, PagerModule, PageService, SortService, FilterService, GroupService, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ProductDataService } from './product-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    GridModule, PagerModule,InMemoryWebApiModule.forRoot(ProductDataService), 
  ],
  providers: [PageService, SortService, FilterService, GroupService, 
    EditService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
