import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Person } from './models/person.model';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private apiUrl = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}${id}/`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:any):Observable<never>{
    console.error('An error occurred:',error);
    return throwError( () => new error('Something went wrong; please try again later.'));
  }
  
}
