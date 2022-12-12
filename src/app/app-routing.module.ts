import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { DataEmployeesComponent } from './components/data-employees/data-employees.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'edit', component: EditRecordComponent},
  {path: 'data', component: DataEmployeesComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
