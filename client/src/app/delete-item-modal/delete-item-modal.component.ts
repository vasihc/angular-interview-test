import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[delete-item-modal]',
  templateUrl: './delete-item-modal.component.html',
  styleUrls: ['./delete-item-modal.component.css']
})
export class DeleteItemModalComponent  {

  constructor(public modal: NgbActiveModal) {}

  closeModal(result: boolean) {
    this.modal.close(result);
  }

}
