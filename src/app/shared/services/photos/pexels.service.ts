import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pexelsResponse } from './constants/pexels.response';
import { pexelUrl } from '../urls.constant';

@Injectable({
  providedIn: 'root'
})
export class PexelsService {

  constructor( private http: HttpClient) { }

  getPhotoPexels(): Observable<pexelsResponse> {
    let httpGetParams: HttpParams = new HttpParams();

    return this.http.get<pexelsResponse>(pexelUrl, {params: httpGetParams, headers: {Authorization: environment.tokenPexels}}).pipe(
      retry(3),
      catchError(this.handleError<pexelsResponse>('getPhotoPexels')));
  }

    /************************************
   * Private Methods
   * **********************************/
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: HttpErrorResponse): Observable<T> => {
        return of(result as T);
      };
    }
}
