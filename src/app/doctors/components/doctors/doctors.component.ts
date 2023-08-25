import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
list:boolean=false;
card:boolean=true;
doctors:any=[];
data:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getdoctors();
  }
listview(){
  this.list=true;
  this.card=false;
}
cardview(){
  this.list=false;
  this.card=true;
}
getdoctors(){
  this.http.get('http://localhost:3000/doctor').subscribe((result)=>{
    this.doctors=result
  })
}
transfer(id:any){
  this.data=id;
}
deletedoctor(){
  this.http.delete('http://localhost:3000/doctor/'+this.data).subscribe();
}
}
