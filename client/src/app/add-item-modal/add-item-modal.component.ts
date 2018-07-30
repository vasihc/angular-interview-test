import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AppService} from "../app.service";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormBuilder, Validators} from '@angular/forms';
import {MultiSelectComponent} from "../multi-select/multi-select.component";

@Component({
  selector: '[add-item-modal]',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent implements OnInit {

  @ViewChild(MultiSelectComponent) public multiSelect: MultiSelectComponent;

  form = this.fb.group({
    tag: new FormControl(),
    content: ""
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

  ngOnInit() {
  }

  onSelect($event){
    console.log($event);
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  closeModal(result: boolean) {
    this.modal.close(result);
  }
}
