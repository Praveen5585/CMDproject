import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  data:any;
  constructor(private https:HttpClient) { }
getmet(){
  return this.https.get('http://localhost:3000/departments');
}

sendit(){
  return this.data;
}

  postdata(user:any){
    return this.https.post('http://localhost:3000/departments/',user)
  }
editing(id:number,data:any){
  return this.https.put('http://localhost:3000/departments/'+id,data)
}

  }
