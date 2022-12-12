import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../Models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private url = 'http://localhost:5002/stratechdbemployees/employees';

  constructor( private http: HttpClient) { }

  getEmployees(){
    return this.http.get(`${this.url}`);
  }

  newEmployee( epmloyee: EmployeeModel){
    return this.http.post(`${this.url}`, epmloyee)
  }
}
