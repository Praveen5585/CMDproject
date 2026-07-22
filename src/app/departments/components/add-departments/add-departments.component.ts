import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {
  department!: FormGroup;
  constructor(private formbuilder:FormBuilder,private service:DepartmentsService) {
   
   }

  ngOnInit(): void {
    this.department=this.formbuilder.group(
      {
        departmentname:['',Validators.required],
        description:['',Validators.required],
        Status:['',Validators.required]
      }
    )
    
  }
  adddepartment(){
    if(this.department.valid){
    this.service.postdata(this.department.value).subscribe(
      {
        next:(res)=>{
          alert('data is storedsuccessfully')
        },
        error:()=>{
          
          alert('error is happen while filling')
        }
      }
    )
    }
    this.department.reset();
  }
// getdata(user:{'departmentname':string,'Status':string}){

// this.service.postdata(user);
// }
// postdata(userdata: any){
//   return this.service.post<any>('http://localhost:3000/user/',userdata);
//     }

}


