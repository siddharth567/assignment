import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private _http: HttpClient) { }

  getList(city){
  return this._http.get('https://vast-shore-74260.herokuapp.com/banks?city='+city)
    
  }
}
