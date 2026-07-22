import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  user:any;
  departmentdetails: any=[];
  clicked:boolean=false;
  data:any;

  constructor( private http:HttpClient,private service:DepartmentsService) { }
  ngOnInit(): void {
   this.getresult();
   
  }
getresult()
{
// this.http.get('http://localhost:3000/user/').subscribe((result)=>{
//     this.departmentdetails = result;

  //})

  this.service.getmet().subscribe((res)=>{
    this.departmentdetails=res;
  })

}
transferid(id:any){
  this.data=id;
}

deletedepartment(){

  this.http.delete('http://localhost:3000/departments/'+this.data).subscribe();

}


}
