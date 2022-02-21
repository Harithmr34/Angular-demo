import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Istudent } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentlistService { 

  private _url:string="/assets/data/students.json";
  constructor(private  http: HttpClient) { }
  getStudents():Observable<Istudent[]>{
    return this.http.get<Istudent[]>(this._url);
  }

  getstudentDetails(){
    return [
      { "name": "harith" , "age": 25 },
      { "name": "sagara" , "age": 26},
      { "name": "sunil" , "age": 24},
      { "name": "Harshith" , "age": 25},
    ];
  }
}
