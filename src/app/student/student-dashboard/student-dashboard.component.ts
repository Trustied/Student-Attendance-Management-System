import { Component, OnInit } from '@angular/core';
import { LoginDetailsService } from '../service/login-details.service';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  studentdetails!: any;
  firstName!: string;
  lastName!: string;
  faculty!: string;
  department!: string;

  checked: boolean = false;
  constructor(private loginDetailsService: LoginDetailsService,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentdetails = this.loginDetailsService.getLoginDetails();
  }
  changeChecked() {
    this.checked = true;
  }

  markAttendance() {
    var month = new Date().getMonth() + 1;
    let data = {
      firstName: this.studentdetails.RESULT.firstName,
      lastName: this.studentdetails.RESULT.lastName,
      faculty: this.studentdetails.RESULT.faculty,
      department: this.studentdetails.RESULT.department,
      date: (new Date().getFullYear() + '-' + month + '-' + new Date().getDate())
    }
    this.studentService.markAttendance(data).subscribe((response) => {
      if (response.status == 200) {
        alert(response.message);
      } else {
        alert(response.message);
      }
    });

  }
}
