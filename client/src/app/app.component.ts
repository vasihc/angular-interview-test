import {Component, ViewChild} from '@angular/core';
import {AppService} from './app.service';

import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { DeleteItemModalComponent } from './delete-item-modal/delete-item-modal.component';
import {Observable, Subject} from "rxjs/index";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Skill Challenge';

  @ViewChild(AddItemModalComponent) addModal: AddItemModalComponent;
  @ViewChild(DeleteItemModalComponent) deleteModal: DeleteItemModalComponent;

  items: any[];
  tags: any[];

  constructor(public service: AppService) {
    this.getTags();
  }

  ngOnInit() {
this.getItems();
  }

  getTags() {
    this.service.getTags().subscribe((items) => {
      this.tags = items.map(item => item.color);
    });
  }

  getItems() {
   this.service.getItems().subscribe(()=>{});
//todo
  }

  addItem(){
this.addModal.showModal(this.tags).subscribe(()=>{

});
  }

  deleteItem(id: any) {
   //todo open accept modal delete and if ok - delete from list.
  }

}
