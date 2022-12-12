import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-data-employees',
  templateUrl: './data-employees.component.html',
})
export class DataEmployeesComponent implements OnInit {

  employees: any[]=[];

  constructor( private databaseService: DatabaseService ) {

    this.databaseService.getEmployees()
    .subscribe( (data: any) => {
      // console.log(data)
      this.employees = data;
    })
  }

  ngOnInit(): void {
  }

}
