import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-data-employees',
  templateUrl: './data-employees.component.html',
})
export class DataEmployeesComponent implements OnInit {

  employees: any[]=[];
  loading : boolean;

  constructor( private databaseService: DatabaseService ) {

    this.loading = true;
    setTimeout(() => {

      this.databaseService.getEmployees()
      .subscribe( (data: any) => {
        // console.log(data)
        this.employees = data;
        this.employees = data.slice(0,20)
      });
      this.loading = false;
    }, 2500);
  }

  ngOnInit(): void {
  }

}
