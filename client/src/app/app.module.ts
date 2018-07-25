import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {AppService} from './app.service'
import { AppComponent } from './app.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { DeleteItemModalComponent } from './delete-item-modal/delete-item-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    AddItemModalComponent,
    DeleteItemModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalDialogModule.forRoot()
  ],
  providers: [AppService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
