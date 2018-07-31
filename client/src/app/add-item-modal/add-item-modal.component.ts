import {Component, ViewChild} from '@angular/core';
import { Subject} from "rxjs";
import {AppService} from "../app.service";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {MultiSelectComponent} from "../multi-select/multi-select.component";

@Component({
  selector: '[add-item-modal]',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent  {

  @ViewChild(MultiSelectComponent) public multiSelect: MultiSelectComponent;

  form = this.fb.group({
    tag: [null, [Validators.required]],
    content: [null, [Validators.required]]
  });

  title: string = "Add new Todo:";
  tags: any[];
  subject: Subject<any>;
  loading: boolean = true;

  constructor(public modal: NgbActiveModal, private service: AppService, private fb: FormBuilder) {
    service.getTags().subscribe(res => {
      this.tags = res.items;
    })
  }

  onSelect($event) {
    this.form.patchValue({tag: $event})
  }

  onSubmit($event) {
    if (this.form.valid) {
      $event.target.disabled = true;
      this.service.addItem(this.form.value).subscribe((res) => {
        $event.target.disabled = false;
        this.modal.close(res);
      });
    }
  }

  closeModal() {
    this.modal.dismiss();
  }
}
