import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddAppiontmentService } from 'src/app/appointments/services/add-appiontment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
appointmentform!:FormGroup;
data:any;

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:ActivatedRoute,private addappoint:AddAppiontmentService) { }

  ngOnInit(): void {
    this.data=this.router.snapshot.params.id;
    this.appointmentform=this.formbuilder.group(
      {
        id:[''],
        patientName: [''],
        department: [''],
        vet: [''],
        date: [''],
        time:[''],
        patientEmail:[''],
        patientPhonenumber:[''],
        Message:[''],
        status:[''],
        address:['']
      }

    )
    this.getappointment();
  }
  getappointment(){
    this.http.get('http://localhost:3000/appointments/'+this.data).subscribe((result:any)=>{
      this.appointmentform.setValue(
        {
        id:result['id'],
        patientName:result ['patientName'],
        department: result['department'],
        vet: result['vet'],
        date:result ['date'],
        time:result['time'],
        patientEmail:result['patientEmail'],
        patientPhonenumber:['patientPhonenumber'],
        Message:['Message'],
        status:[' status'],
        address:['address']

      }
      )
    })
  }
  editdata(){
    this.addappoint.updateAppointment(this.data,this.appointmentform.value).subscribe();
  }

}
