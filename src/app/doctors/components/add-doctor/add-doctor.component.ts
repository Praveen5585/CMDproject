import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AddVetService } from '../../services/add-vet.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
country:any;
  doctorfrom!: FormGroup;
  // Submitted = false;
  constructor(private http:HttpClient,private frombuilder:FormBuilder,private service:AddVetService) { }

  ngOnInit(): void {
    this.getcountry();
    this.doctorfrom=this.frombuilder.group({
      firstname:['',Validators.required],
        lastname:['',Validators.required],
        username:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        confirmpassword:['',Validators.required],
        DOB:['',Validators.required],
        gender:['',Validators.required],
        address:['',Validators.required],
        country:['',Validators.required],
        city:['',Validators.required],
        phone:['',Validators.required],
        state:['',Validators.required],
        code:['',Validators.required],
        bio:['',Validators.required],
        Status:['',Validators.required]

    })

  }
  // onSubmit(){
  //   this.Submitted = true

  //   if(this. doctorfrom.invalid){
  //     return
  //   }
  //   alert("success");
  // }
  getcountry(){
    this.http.get('http://localhost:3000/countries').subscribe((response)=>
   {
    this.country=response
  })
  }

adddoctor(){
    this.service.postdoctor(this.doctorfrom.value).subscribe({
      next:(res)=>{
        alert("successfully added Doctor data")
        console.log(res);
      },
        error:()=>{
          alert('error occured while adding Doctor')
        }
      });
      this.doctorfrom.reset();
}

}
