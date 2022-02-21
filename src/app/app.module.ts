import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentComponentComponent } from './Student/student-component/student-component.component';
import { TestComponent } from './test/test.component';
import { StudentlistService } from './studentlist.service';
import { HomeComponent } from './home/home.component';
import { NopagetodisplayComponent } from './nopagetodisplay/nopagetodisplay.component'
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

const appRoutes:Routes=[
{ path:'home', component: HomeComponent},
{ path:'student', component: StudentComponentComponent},
{ path:'', redirectTo: './home' , pathMatch:'full'},
{ path:'**', component: NopagetodisplayComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponentComponent,
    TestComponent,
    HomeComponent,
    NopagetodisplayComponent,
  ],
  imports: [
    BrowserModule,
     FormsModule,
     RouterModule.forRoot(appRoutes),
     HttpClientModule

  ],
  providers: [StudentlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
