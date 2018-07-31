import {Component} from '@angular/core';
import {AppService} from './app.service';

import {AddItemModalComponent} from './add-item-modal/add-item-modal.component';
import {DeleteItemModalComponent} from './delete-item-modal/delete-item-modal.component';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Skill Challenge';
  items: any[] = [];
  tags: any[];

  constructor(public service: AppService, private modalService: NgbModal) {
    this.getTags();
  }

  ngOnInit() {
    this.getItems();
  }

  getTags() {
    this.service.getTags().subscribe((res) => {
      this.tags = res.items;
    });
  }

  getItems(hash = null) {
    this.service.getItems(hash).subscribe((res) => {
      this.items = this.items.concat(res.items);
      if (res.finish === false)
        this.getItems(res.hash);
    });
  }

  addItem() {
    this.modalService.open(AddItemModalComponent).result.then((result) => {
      this.items.push(result);
    }).catch();
  }

  deleteItem(item: any) {
    this.modalService.open(DeleteItemModalComponent).result.then((result) => {
      if (result)
        this.service.deleteItem(item).subscribe((res) => {
          if (res) {
            this.items.splice(this.items.indexOf(item), 1);
          }
        })
    }).catch((error) => {
      console.log(error);
    });
  }

}
