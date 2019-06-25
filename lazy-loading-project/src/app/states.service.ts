import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  private url = 'http://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private httpClient: HttpClient) { }

  public getStates(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}
