import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentComponent,
    LoginComponent,
    SignupComponent,
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class StudentModule { }
