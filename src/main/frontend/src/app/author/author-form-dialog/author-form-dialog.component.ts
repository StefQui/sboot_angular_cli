import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {Author} from "../../model/author";
import {ModalDirective} from "ng2-bootstrap";
import * as _ from 'lodash';

@Component({
  selector: 'author-form-dialog',
  templateUrl: './author-form-dialog.component.html',
  styleUrls: ['./author-form-dialog.component.css']
})
export class AuthorFormDialogComponent implements OnInit {

  @ViewChild('myEditmodal') public theModal:ModalDirective;

  private author;

  @Input()
  set author2(author2: Author) {
    // this.author = author1;
    this.author = _.cloneDeep(author2);
  }

  get author2(): Author{
    return this.author;
  }
  @Output() cancel = new EventEmitter<void>();
  @Output() onUpdated = new EventEmitter<Author>();

  constructor() { }

  ngOnInit() {
  }

  showEditFor(author: Author) {
    this.theModal.show();
  }

  onCancel() {
    this.theModal.hide();
    this.cancel.emit();
  }

  onPopupUpdated(author: Author) {
    this.theModal.hide();
    this.onUpdated.emit(author);
  }

}
