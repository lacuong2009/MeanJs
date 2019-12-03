import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import {Contact} from "./contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Define API
  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getContacts(): Observable<Contact> {
    return this.http.get<Contact>(this.apiURL + '/contact')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getContact(id): Observable<Contact> {
    return this.http.get<Contact>(this.apiURL + '/contact/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  create(data): Observable<Contact> {
    return this.http.post<Contact>(this.apiURL + '/contact', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  update(id, contact): Observable<Contact> {
    return this.http.put<Contact>(this.apiURL + '/contact/' + id, JSON.stringify(contact), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete employee
  delete(id){
    return this.http.delete<Contact>(this.apiURL + '/contact/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
