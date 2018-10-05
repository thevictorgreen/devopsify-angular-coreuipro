import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class StripeService {

  private url:string = "https://api.stripe.com/v1/tokens";

  constructor(private http: HttpClient) {}

  createToken(body:string): Observable<any> {
    //var body = "card[number]=4242424242424242&card[exp_month]=8&card[exp_year]=2020&card[cvc]=111";
    var headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('Authorization', 'Bearer pk_test_UIvHNIeYdSzFtxXZgLXkrbMU');
    return this.http.post<any>(this.url, body, { headers: headers}).pipe(
      tap((response: any) => this.log(response)),
      catchError(this.handleError<any>('createToken'))
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

  /** Log a HeroService message with the MessageService */
  private log(response: any):void {
    console.log('Yo bruh. here dat token yo: ' + response.id);
  }

}
