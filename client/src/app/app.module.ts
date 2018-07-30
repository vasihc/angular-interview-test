import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from './app.service'
import { AppComponent } from './app.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { DeleteItemModalComponent } from './delete-item-modal/delete-item-modal.component';
import {MultiPipe} from "./multi-select/multi-select.component";

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    AddItemModalComponent,
    DeleteItemModalComponent,
    MultiPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteItemModalComponent,
    AddItemModalComponent
  ]
})
export class AppModule { }
