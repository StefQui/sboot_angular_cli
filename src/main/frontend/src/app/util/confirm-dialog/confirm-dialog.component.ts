import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {Author} from "../../model/author";

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor() { }

  private author: Author;

  @ViewChild('mymodal') public theModal:ModalDirective;
  @Output() onConfirm = new EventEmitter<Author>();

  showConfirmFor(author: Author) {
    this.author = author;
    this.theModal.show();
  }

  ngOnInit() {
  }

  confirm() {
    this.theModal.hide();
    this.onConfirm.emit(this.author);
  }

  cancel() {
    this.theModal.hide();
  }

}
