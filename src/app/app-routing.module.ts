import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DataEmployeesComponent } from './components/data-employees/data-employees.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'data', component: DataEmployeesComponent},
  {path: 'newEmployee', component: CreateEmployeeComponent},
  {path: 'editEmployee', component: EditRecordComponent},
  {path: 'deleteEmployee', component: DeleteEmployeeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
