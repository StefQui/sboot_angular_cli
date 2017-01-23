import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgRestService} from "../../rest/ng-rest";
import {Author} from "../../model/author";
import {Observable} from "rxjs";
import * as _ from 'lodash';

@Component({
  selector: 'author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  private editing: boolean;

  constructor(
    private authorService: NgRestService
  ) {
  }

  ngOnInit() {
  }

  private author;

  @Input()
  set author1(author1: Author) {
    // this.author = author1;
    this.author = _.cloneDeep(author1);
  }

  get author1(): Author{
    return this.author;
  }
  // @Input() author: Author;
  @Output() onUpdated = new EventEmitter<Author>();
  @Output() onCancel = new EventEmitter<void>();

  cancel() {
    this.onCancel.emit();
  }

  update(author: Author) {
    let authorOperation:Observable<Author[]>;

    if(!author.id){
      // Create a new comment
      authorOperation = this.authorService.addAuthor(author)
    } else {
      // Update an existing comment
      authorOperation = this.authorService.saveAuthor(author)
    }

    // Subscribe to observable
    authorOperation.subscribe(
      comments => {
        // this.author = new Author(new Date(), '', '');
        // Switch editing status
        // if(this.editing) this.editing = !this.editing;
        this.onUpdated.emit(author);
      },
      err => {
        // Log errors if any
        console.log(err);
      });

  }

}
