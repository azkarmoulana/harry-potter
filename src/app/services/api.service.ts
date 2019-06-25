import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  public getCharacters() {
   return this._http.get('http://hp-api.herokuapp.com/api/characters');
  
  }

  public getStaff() {
   return this._http.get('http://hp-api.herokuapp.com/api/characters/staff');
  
  }

  public getStudent() {
   return this._http.get('http://hp-api.herokuapp.com/api/characters/students');
  
  }

  public getHouse() {
   return this._http.get('http://hp-api.herokuapp.com/api/characters/house/slytherin');
  
  }
}
