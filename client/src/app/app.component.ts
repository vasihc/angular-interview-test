import {Component, ViewChild} from '@angular/core';
import {AppService} from './app.service';

import { MultiSelectComponent } from './multi-select/multi-select.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Skill Challenge';
@ViewChild("") multiSelect: MultiSelectComponent;
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
//todo
  }

  addItem(){

  }

  deleteItem(id: any) {
   //todo open accept modal delete and if ok - delete from list.
  }

}
