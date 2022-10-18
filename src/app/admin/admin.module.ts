import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StudentDataComponent } from './components/admin-dashboard/student-data/student-data.component';
import { FacultyDataComponent } from './components/admin-dashboard/faculty-data/faculty-data.component';
import { CoursesComponent } from './components/admin-dashboard/courses/courses.component';
import { AdminSignupComponent } from './admin-signup/admin-signup/admin-signup.component';
import { DepartmentDataComponent } from './components/admin-dashboard/department-data/department-data.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AttendanceComponent } from './components/admin-dashboard/attendance/attendance.component';
import { AttendanceFilterComponent } from './components/admin-dashboard/attendance/attendance-filter/attendance-filter.component';






@NgModule({
  declarations: [
    AdminComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    StudentDataComponent,
    FacultyDataComponent,
    CoursesComponent,
    AdminSignupComponent,
    DepartmentDataComponent,
    AdminloginComponent,
    AttendanceComponent,
    AttendanceFilterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
