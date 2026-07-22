import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddPetsService {

  constructor(private httpclient:HttpClient) { }


  //post patients
  postpatient(data:any){
     return this.httpclient.post('http://localhost:3000/patients/',data)

  }
}
