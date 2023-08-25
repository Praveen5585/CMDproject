import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
patients:any;
data:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getpatients();
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

  getpatients(){
    this.http.get('http://localhost:3000/patients').subscribe((result)=>{this.patients=result});
  }
  transfer(id:any){
    this.data=id
  }
  deletepatient(){
    this.http.delete('http://localhost:3000/patients/'+this.data).subscribe();
  }

}
