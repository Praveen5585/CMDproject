import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
//There will one service per component. But other components can also use the
//service allocated for another component via there distributers
//This layer interacts with the repository layer and has business logic
@Injectable({
  providedIn: 'root'
})
export class AddAppiontmentService {
  reset: any;

  // Inject Repository in the constructor
  constructor(private http:HttpClient) { }

  postAppointment(data:any) {
    return this.http.post<any>('http://localhost:3000/appointments', data).pipe(map((res:any)=> {
      return res;
    }))
  }

  getAppointment( ) {
    return this.http.get<any>('http://localhost:3000/appointments').pipe(map((res:any)=> {
      return res;
    }))
  }

  updateAppointment(id:number,value:any) {
    return this.http.put<any>('http://localhost:3000/appointments/' +id,value);
  }

  deleteAppointment(id:any) {
    return this.http.delete<any>('http://localhost:3000/appointments/' +id).pipe(map((res:any)=> {
      return res;
    }))
  }

  // call the repository to get,post and put the data
}
