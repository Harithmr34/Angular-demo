import { Component,OnInit} from '@angular/core';
import { StudentComponentComponent } from './Student/student-component/student-component.component';
import { StudentlistService } from './studentlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Myapp';
  inputname = "";
  name : string= "My angular app";
  static studentDetail: { name: string; age: number; }[];
   myapplication(){
    return "Dear User Welcome to " + this.name;
  }
buttonSize : number = 20;
buttonOuterSpace : Number = 10;
inputId = "app-input";
applynewactive : boolean = true;
muyltilinedtyle(){
  var mystyles={
   'font-size.px'  : this.buttonSize,
   'padding.px':this.buttonOuterSpace,
  };
  return mystyles;
}
public message = "";
public onClick():void{
   this.message="Button Clicked";
}
public names = ["Dhoni","Rahul","sachin","Kholi"];
public switch : boolean = true;
public switchMode(){
  this.switch = !this.switch;
}
public Parentname :string = "Harith MR";

public students:any=[];
constructor(public _studentservice:StudentlistService){}
ngOninit(){
  this._studentservice.getStudents()
  .subscribe(data => this.students=data)
}



}
