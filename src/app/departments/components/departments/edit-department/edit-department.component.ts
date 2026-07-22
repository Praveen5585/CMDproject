import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from 'src/app/departments/services/departments.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  editdepartment!:FormGroup
  id:any;
  

  constructor(private depart:DepartmentsService,private formbuilder:FormBuilder,private http:HttpClient,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params.id

    this.editdepartment=this.formbuilder.group(
      {
        departmentname:['',Validators.required],
        description:['',Validators.required],
        Status:['',Validators.required]
      }
    )
  this.getdata();
  
  
    }

getdata(){
  this.http.get('http://localhost:3000/departments/'+this.id).subscribe((Res:any)=>
  {
    this.editdepartment.setValue(
      {
        departmentname:Res['departmentname'],
        description:Res['description'],
        Status:Res['Status']
      }
    )
  });
}
editpatientdata(){
  this.depart.editing(this.id,this.editdepartment.value).subscribe((result:any)=>{alert('succesfully updated')});
  this.editdepartment.reset();
}

}
