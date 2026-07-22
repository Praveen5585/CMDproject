import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from'@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform!:FormGroup;
data:any=[];

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group(
      {
        username:['',Validators.required],
        password:['',Validators.required]
      }
    )
  
  }
  validateuser(){
    this.http.get('http://localhost:3000/users').subscribe((res)=>{this.data=res;});
    // if(this.loginform.value==this.data.username && this.loginform.value==this.data.password){
    //    this.router.navigateByUrl('/dashboard');

    // }

  }

}
