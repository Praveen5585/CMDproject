import { Component, OnInit } from '@angular/core';
import { AddAppiontmentService } from '../../services/add-appiontment.service';
// import { FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {
  // formValue !: FormGroup;

  allAppointment:any;
  data:any;
  constructor(private appointment:AddAppiontmentService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllAppointments();
  }


  list:boolean=false;
  card:boolean=true;

  lists(){
    this.list =true;
    this.card =false;
  }
  cards(){
    this.card =true;
    this.list =false;
  }


   getAllAppointments(){
    this.appointment.getAppointment().subscribe(res=>{
      this.allAppointment=res;
    })
  }
  transferid(id:any){
    this.data=id;
  }
  
  

  deleteAppointements(){
    this.http.delete('http://localhost:3000/appointments/'+this.data).subscribe();
    
    }
  }
