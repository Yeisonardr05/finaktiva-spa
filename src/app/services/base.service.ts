import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { ResponseModel } from '../models/common/response.model';
import { Observable } from 'rxjs/internal/Observable';
import { PARAMETER } from '../config/configuration';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<TModel> {

  public headers: HttpHeaders;
  public API_ROOT = environment.apiURL;
  public API_KEY = environment.apikey;
  public HASH = environment.hash;

  constructor(
    protected _httpClient: HttpClient,
  ) {

  }

  public getAll(endPoint: string, queryString: string = "", offset: number = PARAMETER.offset): Observable<ResponseModel<TModel[]>> {
    let parameters = `ts=${PARAMETER.timestamp}&apikey=${this.API_KEY}&hash=${this.HASH}&offset=${offset}&limit=${PARAMETER.limit}&${queryString}`;
    return this._httpClient.get<ResponseModel<TModel[]>>(`${this.API_ROOT}${endPoint}?${parameters}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  public getById(endPoint: string, id: number): Observable<ResponseModel<TModel[]>> {
    let parameters = `ts=${PARAMETER.timestamp}&apikey=${this.API_KEY}&hash=${this.HASH}&limit=${PARAMETER.limit}`;
    return this._httpClient.get<ResponseModel<TModel[]>>(`${this.API_ROOT}${endPoint}/${id}?${parameters}`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  public getResourceURI(resourceURI: string): Observable<ResponseModel<TModel[]>> {
    let parameters = `ts=${PARAMETER.timestamp}&apikey=${this.API_KEY}&hash=${this.HASH}`;
    return this._httpClient.get<ResponseModel<TModel[]>>(`${resourceURI}?${parameters}`)
      .pipe(map(resp => {
        return resp;
      }));
  }
}
