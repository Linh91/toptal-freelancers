import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FreelancerGridComponent } from './freelancer-grid/freelancer-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    FreelancerGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
