import {Component, OnInit, ViewChild} from '@angular/core';
import {Restangular} from "ng2-restangular";
import {ToasterService} from "angular2-toaster";
import {Author} from "../../model/author";
import {NgRestService} from "../../rest/ng-rest";
import {ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {ConfirmDialogComponent} from "../../util/confirm-dialog/confirm-dialog.component";

@Component({
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  providers: [Restangular]
})
export class AuthorListComponent implements OnInit {

  // values: number[] = [11, 2, 3];
  // private list;
  selectedAuthor: Author;
  private toasterService: ToasterService;

  @ViewChild('confirmModal') public confirm:ConfirmDialogComponent;

  constructor(
    private ngRestService: NgRestService,
    toasterService: ToasterService
  ){
    this.toasterService = toasterService;
  }

  authors: Author[];

  loadComments(){
    // Get all comments
    this.ngRestService.getAuthors()
      .subscribe(
        authors => {
          this.authors = authors;
          console.log('authors : ' + authors);
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        }
      );
  }

  edit(author: Author): void {
    this.selectedAuthor = author;
  }

  createAuthor() {
    this.edit(new Author(null, null));
  }

  onUpdated(author: Author) {
    this.toasterService.pop('success', 'Save', 'Enregistrement réalisé avec succès');
    this.onCancel();
    this.loadComments();
  }

  onCancel() {
    this.selectedAuthor = null;
  }

  delete(author: Author) {
    this.confirm.showConfirmFor(author);
  }

  ngOnInit() {
    // let authors: IAuthorShort[] = this._authorService.getAuthors();
    this.loadComments()

  }

}
