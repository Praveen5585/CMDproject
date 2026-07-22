import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './appointments/components/add-appointment/add-appointment.component';
import { AdminDashboardComponent } from './appointments/components/admin-dashboard/admin-dashboard.component';
import { AllAppointmentsComponent } from './appointments/components/all-appointments/all-appointments.component';



import { AddDepartmentsComponent } from './departments/components/add-departments/add-departments.component';
import { AddScheduleComponent } from './appointments/components/add-schedule/add-schedule.component';

import { DepartmentsComponent } from './departments/components/departments/departments.component';

import { ScheduleComponent } from './appointments/components/schedule/schedule.component';

import { AddPetsComponent } from './patients/components/add-pets/add-pets.component';
import { PetsComponent } from './patients/components/pets/pets.component';

import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AddDoctorComponent } from './doctors/components/add-doctor/add-doctor.component';
import { DoctorsComponent } from './doctors/components/doctors/doctors.component';
import { EditDepartmentComponent } from './departments/components/departments/edit-department/edit-department.component';
import { EditPatientsComponent } from './patients/components/add-pets/edit-patients/edit-patients.component';
import { EditAppointmentComponent } from './appointments/components/add-appointment/edit-appointment/edit-appointment.component';
import { EditDoctorComponent } from './doctors/components/add-doctor/edit-doctor/edit-doctor.component';

const routes: Routes = [
  {path: '', redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},


  {path: 'allAppointments', component:AllAppointmentsComponent},
  {path: 'dashboard', component:AdminDashboardComponent},
  {path: 'addAppointments', component:AddAppointmentComponent},
  {path: 'edit-appointment/:id', component:EditAppointmentComponent},

  {path: 'doctors', component:DoctorsComponent},
  {path: 'addDoctor', component:AddDoctorComponent},
  {path:'edit-doctor',component:EditDoctorComponent},

  {path: 'patients', component:PetsComponent},
  {path: 'addPatient', component:AddPetsComponent},

  {path:'edit-patient/:id',component:EditPatientsComponent},

  {path: 'schedule', component:ScheduleComponent},
  {path: 'addSchedule', component:AddScheduleComponent},
  {path:'edit-department/:id',component:EditDepartmentComponent},

  {path: 'departments', component:DepartmentsComponent},
  {path: 'addDepartment', component:AddDepartmentsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
