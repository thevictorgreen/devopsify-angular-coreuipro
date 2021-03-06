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
export class AccountService {

  //private url:string = "http://localhost:3000/accounts";
  private url:string = "https://accountmicro.vdigital.io/accounts";


  constructor( private dataService: DataService, private http: HttpClient ) {}

  /** GET accounts from the server */
  getAllAccounts(): Observable<any[]>  {
    return this.http.get<any[]>(this.url)
    .pipe(
      tap((message: any) => this.log(`fetched accounts with status ${message.status}`)),
      catchError(this.handleError('getAllAccounts', []))
    );
  }
//tap((payload: any) => this.log(`fetched machine with status ${payload.status} and hostname ${payload.data[0].hostname}`))
  getAccount(id:string): Observable<any[]>  {
    return this.http.get<any[]>(this.url + "/" + id)
    .pipe(
      tap((payload: any) => this.log(`fetched account with status ${payload.status} and payload ${payload.data}`)),
      catchError(this.handleError('getAccount', []))
    );
  }

  addAccount (account: any): Observable<any> {
    return this.http.post<any>(this.url, account, httpOptions).pipe(
      tap((message: any) => this.log(`added account with status ${message.status}`)),
      catchError(this.handleError<any>('addAccount'))
    );
  }

  authAccount (account: any): Observable<any> {
    return this.http.post<any>(this.url + "/auth", account, httpOptions).pipe(
      tap((payload: any) => this.handleData(payload)),
      catchError(this.handleError<any>('authAccount'))
    );
  }

  addPayment (account: any): Observable<any> {
    return this.http.post<any>(this.url + "/payment", account, httpOptions).pipe(
      tap((payload: any) => this.handleData(payload)),
      catchError(this.handleError<any>('addPayment'))
    );
  }

  updateAccount (account: any): Observable<any> {
    return this.http.put<any>(this.url, account, httpOptions).pipe(
      tap((payload: any) => this.log(`updated account with status ${payload.status}`)),
      catchError(this.handleError<any>('updateAccount'))
    );
  }

  deleteAccount (id: string): Observable<any> {
    return this.http.delete<any>(this.url + "/" + id, httpOptions).pipe(
      tap((payload: any) => this.log(`deleted account with status ${payload.status}`)),
      catchError(this.handleError<any>('deleteAccount'))
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
    this.dataService.updateAccount( payload.data );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string):void {
    console.log(message);
  }

}
