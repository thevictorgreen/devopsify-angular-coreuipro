import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { DataService } from './data.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmailService {

  //private url:string = "http://localhost:3000/accounts/sendemail";
  private url:string = "https://accountmicro.vdigital.io/accounts/sendemail";


  constructor( private dataService: DataService, private http: HttpClient ) {}

  sendEmailMessage (emailmessage: any): Observable<any> {
    return this.http.post<any>(this.url, emailmessage, httpOptions).pipe(
      tap((message: any) => this.log(`sent email message with status ${message.status}`)),
      catchError(this.handleError<any>('sendEmailMessage'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** HANDLE DATA **/
  private handleData(payload:any):void {
    //this.dataService.updateAccount( payload.data );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string):void {
    console.log(message);
  }

}
