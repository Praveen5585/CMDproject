import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { EditDoctorComponent } from './components/add-doctor/edit-doctor/edit-doctor.component';


@NgModule({
  declarations: [
    EditDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule { }
