import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
appointments:any;
doctordetails:any;
patientdetails:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getappointment();
    this.getdoctors();
    this.getpatients();
  }
getappointment(){
  this.http.get('http://localhost:3000/appointments').subscribe((res)=>{
    this.appointments=res;
    
  })
}
getdoctors(){
  this.http.get('http://localhost:3000/doctor').subscribe((result)=>{
    this.doctordetails=result;
  })
}
getpatients(){
  this.http.get('http://localhost:3000/patients').subscribe((results)=>{
    this.patientdetails=results;
    this.patientdetails=this.patientdetails?.length;
  })
}
}
