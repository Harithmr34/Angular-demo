import { Component, OnInit } from '@angular/core';
import { StudentlistService } from 'src/app/studentlist.service';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.scss']
})
export class StudentComponentComponent  {

  Firstname:string="Harith";
  Lastname:string="MR";
  age:number=25;
  static studentDetail: { name: string; age: number; }[];

  public studentDetail:any=[];
constructor(private students:StudentlistService){}
ngOnInit(){
  this.studentDetail = this.students.getstudentDetails();
}

}
