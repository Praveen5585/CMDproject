import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { AppointmentModel } from './add-appointement.model';
import { AddAppiontmentService } from '../../services/add-appiontment.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  // Appointment: any;
  // AddAppointmentComponent: any;
  // controls:any;
  // querySelector(arg0: string) {
  //   throw new Error('Method not implemented.');
  // }
  // document: any;
  // res(res: any) {
  //   throw new Error('Method not implemented.');
  // }
  
  formValue !: FormGroup;
  appointmentModelObj : AppointmentModel = new AppointmentModel();
  registerForm: any;
  // allAppointment:any;
  // constructor(private formBuilder : FormBuilder) { }
    // Variable declaration and initialization

  // Dependency Injection inside constructor
  constructor(private formBuilder : FormBuilder, private appointment:AddAppiontmentService,private http:HttpClient) { }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id:['',Validators.required],
      patientName: ['',Validators.required],
      department: ['',Validators.required],
      vet: ['',Validators.required],
      date: ['',Validators.required],
      time:['',Validators.required],
      patientEmail:['',Validators.required],
      patientPhonenumber:['',Validators.required],
      Message:['',Validators.required],
      status:['',Validators.required],
      address:['',Validators.required]

    })
    // this.getAllAppointments()
  }

  postAppointmentDetails(){
    this.appointmentModelObj.id =this.formValue.value.id;
    this.appointmentModelObj.patientName =this.formValue.value.patientName;
    this.appointmentModelObj.department =this.formValue.value.department;
    this.appointmentModelObj.vet =this.formValue.value.vet;
    this.appointmentModelObj.date =this.formValue.value.date;
    this.appointmentModelObj.time =this.formValue.value.time;
    this.appointmentModelObj.patientEmail =this.formValue.value.patientEmail;
    this.appointmentModelObj.patientPhonenumber =this.formValue.value.patientPhonenumber;
    this.appointmentModelObj.Message =this.formValue.value.Message;
    this.appointmentModelObj.status =this.formValue.value.status;

    this.appointment.postAppointment(this.appointmentModelObj).subscribe(res=>{
      console.log(res);
      alert("Appointement Added Successfully")
    },
    err=>{
      alert("Something Went wrong")
    })
    this.appointment.reset();
  }

  // Logic for the submit
  // onSubmit() {

  // }
}
