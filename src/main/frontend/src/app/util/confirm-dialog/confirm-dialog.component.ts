import {Component, OnInit, ViewChild} from '@angular/core';
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

  showConfirmFor(author) {
    this.author = author;
    this.theModal.show();
  }

  ngOnInit() {
  }

}
