import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AddPetsService } from '../../services/add-pets.service';


@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {
patientsForm!:FormGroup;
country:any=[];


  constructor(private service:AddPetsService,private formbuilder:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {

    this.patientsForm=this.formbuilder.group(
      {
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        username:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        confirmpassword:['',Validators.required],
        DOB:['',Validators.required],
        gender:['',Validators.required],
        address:['',Validators.required],
        city:['',Validators.required],
        phone:['',Validators.required],
        country:['',Validators.required],
        state:['',Validators.required],
        code:['',Validators.required],
        bio:['',Validators.required],
        Status:['',Validators.required]
        
      }
    )
    this.getdetails();
   
  }

  ////get countries data
  getdetails(){
   return this.http.get( 'http://localhost:3000/countries').subscribe((res)=>{this.country=res});
  }

////post patients data
  addpatient()
  {
    this.service.postpatient(this.patientsForm.value).subscribe({
      next:(res: any)=>{
        alert("successfully added patients data")
      },
        error:()=>{
          alert('error occured while adding patients')
        }
      });
      this.patientsForm.reset();
    
}


 
}


