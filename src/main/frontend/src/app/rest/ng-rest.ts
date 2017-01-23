import { Resource } from 'ng2-rest/ng2-rest';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Rx';
import {Response, Http, Headers, RequestOptions} from "@angular/http";
import {Author} from "../model/author";

@Injectable()
export class NgRestService {


  constructor (private http: Http) {}

  // private commentsUrl = 'https://scotch-http-api.herokuapp.com/api/comments';
  private authorsUrl = 'http://localhost:8080/api/authors';

  getAuthors() : Observable<Author[]>{
    // ...using get request
    return this.http.get(this.authorsUrl)
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  saveAuthor (body: Object): Observable<Author[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(`${this.authorsUrl}/`, body, options) // ...using put request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  addAuthor (body: Object): Observable<Author[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.authorsUrl, body, options) // ...using post request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  removeAuthor (id:string): Observable<Author[]> {
    return this.http.delete(`${this.authorsUrl}/${id}`) // ...using put request
      .map((res:Response) => {
        console.log('result = ' + res);
        console.log('result2 = ' + res.toString());
        return null;
      }) // ...and calling .json() on the response to return data
      .catch((error:any) => {
        console.log('result3 = ' + error);
        return Observable.throw(error.json() || 'Server error')
      }); //...errors if any
  }
}
