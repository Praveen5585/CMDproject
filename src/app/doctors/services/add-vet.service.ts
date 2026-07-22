import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddVetService {

  constructor(private http:HttpClient) { }
  postdoctor(data:any){
    return this.http.post<any>('http://localhost:3000/doctor',data)
  }
}
