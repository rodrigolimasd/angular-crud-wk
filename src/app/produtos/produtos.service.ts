import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  urlApi = 'http://18.231.42.102:3000/api/produtos'
   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getProdutos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.urlApi)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  save(produto: any): Observable<any> {
    return this.httpClient.post<any>(this.urlApi, JSON.stringify(produto), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  update(produto: any): Observable<any> {
    return this.httpClient.put<any>(this.urlApi+ '/' + produto._id, JSON.stringify(produto), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  get(produto: any) {
    return this.httpClient.get<any>(this.urlApi + '/' + produto._id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  delete(produto: any) {
    return this.httpClient.delete<any>(this.urlApi + '/' + produto._id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(ex: HttpErrorResponse) {
    console.log('erro', ex.error);
    return throwError(() => new Error(ex.error))
  }
}
