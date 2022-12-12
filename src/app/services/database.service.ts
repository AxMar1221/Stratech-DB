import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private http: HttpClient) { }

  getEmployees(){
    return this.http.get('http://localhost:5002/stratechdbemployees/employees')
  }
}
