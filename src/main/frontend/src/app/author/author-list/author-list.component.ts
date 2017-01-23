import {Component, OnInit, ViewChild} from '@angular/core';
import {Restangular} from "ng2-restangular";
import {ToasterService} from "angular2-toaster";
import {Author} from "../../model/author";
import {NgRestService} from "../../rest/ng-rest";
import {ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {ConfirmDialogComponent} from "../../util/confirm-dialog/confirm-dialog.component";
import {AuthorFormComponent} from "../author-form/author-form.component";
import {AuthorFormDialogComponent} from "../author-form-dialog/author-form-dialog.component";

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
  @ViewChild('editModal') public editDialog:AuthorFormDialogComponent;

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

  editInPopup(author: Author): void {
    this.selectedAuthor = author;
    this.editDialog.showEditFor(author);
  }

  createAuthor() {
    this.edit(new Author(null, null));
  }

  createAuthorInPopup() {
    this.editInPopup(new Author(null, null));
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

  onConfirmDelete(author: Author) {
    console.log('confirmed ' + author);
    this.ngRestService.removeAuthor(author.id.toString())
      .subscribe(authors => {
          this.loadComments();
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        })
  }

  ngOnInit() {
    // let authors: IAuthorShort[] = this._authorService.getAuthors();
    this.loadComments()

  }

}
