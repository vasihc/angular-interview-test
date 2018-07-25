import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppService} from './app.service'


import { AppComponent } from './app.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';


@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
