import { Injectable } from '@angular/core';
import {Saleteam} from './saleteam';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SaleteamService {
  formData: Saleteam = new Saleteam();
  visits: Saleteam[];

  constructor(private httpClient: HttpClient) { }

  //binding customer data to get
  bindListCustomers()
  {
    this.httpClient.get(environment.apiUrl+"/api/visit/getvisits")
    .toPromise().then(response=>
      this.visits=response as Saleteam[]);
  }
  
  //insert
  insertVisit(visit: Saleteam): Observable<any>
  {
    return this.httpClient.post(environment.apiUrl + "/api/visit/getvisits", visit);
  }
  //update
  updateVisit(visit:Saleteam):Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+ "/api/visit/updatevisits",visit);
  }
  //Delete
  deleteVisit(VisitId:number):Observable<any>
  {
    return this.httpClient.delete(environment.apiUrl+ "/api/visit/deletevisit" +VisitId);
  }
}
