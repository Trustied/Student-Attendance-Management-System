import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  faculty: boolean = false;
  student: boolean = false;
  courses: boolean = false;
  department: boolean = false;
  attendance: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showFacultyData();
  }
  setoff() {
    this.faculty = false;
    this.student = false;
    this.courses = false;
    this.attendance = false;
    this.department = false;
  }
  showFacultyData() {
    this.setoff();
    this.faculty = true;
  }

  showDepartmentData() {
    this.setoff();
    this.department = true;
  }

  showStudentData() {
    this.setoff();
    this.student = true;
  }

  showAttendanceData() {
    this.setoff();
    this.attendance = true;
  }

  showAllCourses() {
    this.setoff();
    this.courses = true;
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['admin/login']);
  }

}
