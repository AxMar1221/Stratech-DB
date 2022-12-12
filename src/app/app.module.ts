import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DataEmployeesComponent } from './components/data-employees/data-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditRecordComponent,
    FooterComponent,
    NavbarComponent,
    DataEmployeesComponent,
    CreateEmployeeComponent,
    LoadingComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
