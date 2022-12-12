import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from 'src/app/Models/employees.model';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './create-employee.component.html',
})
export class CreateEmployeeComponent implements OnInit {

  form!: FormGroup;
  employee: EmployeeModel = new EmployeeModel();


  constructor(  private fb: FormBuilder,
                private databaseService: DatabaseService) {
    this.createForm();
    this.loadDataToForm();
  }

  ngOnInit(): void {
  }
  // get hobies(){
  //   return this.form.get('hobies') as FormArray
  // }
  get nameNoValid(){
    return this.form.get('name')?.invalid && this.form.get('name')?.touched
  }
  get officeNoValid(){
    return this.form.get('office')?.invalid && this.form.get('office')?.touched
  }
  get birthdayNoValid(){
    return this.form.get('dates.birthday')?.invalid && this.form.get('dates.birthday')?.touched
  }
  get admissionNoValid(){
    return this.form.get('dates.admission')?.invalid && this.form.get('dates.admission')?.touched
  }
  // get emailNoValid(){
  //   return this.form.get('email')?.invalid && this.form.get('email')?.touched
  // }

  createForm(){
    this.form = this.fb.group({
      name:     ['', [Validators.required, Validators.minLength(10)]],
      office: ['', [Validators.required, Validators.minLength(3)]],
      dates: this.fb.group({
        birthday: ['', Validators.required],
        admission: ['', Validators.required],
      }),
    });
  }
  loadDataToForm(){
    this.form.reset({
      name: '',
      office: '',
      dates: {
        cumpleanios: '',
        ingreso: '',
      },
    })
  }
  // addHobie(){
  //   this.hobies.push( this.fb.control(''))
  // }
  // deletHobie(i:number){
  //   this.hobies.removeAt(i);
  // }
  save() {
    console.log(this.form)
    if(this.form.invalid){
      return Object.values(this.form.controls).forEach( control => {
        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAsTouched());
        }else{
          control.markAllAsTouched();
        }
      });
  }
  this.form.reset({
    name: '',
  });
}
}
