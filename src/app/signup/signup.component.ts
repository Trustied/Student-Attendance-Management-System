import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student/service/student.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  faculty!: string
  firstName!: string
  lastName!: string
  email!: string
  department!: string
  state!: string
  gender!: string
  password!: string
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      faculty: this.faculty,
      department: this.department,
      gender: this.gender,
      state: this.state
    }
    //console.log(data);
    this.studentService.createStudent(data).subscribe((response) => {
      if (response.status == 200) {
        alert(response.message);
        this.router.navigate(['./login']);
      } else {
        alert(response.message);
      }
    });
  }

  canExist() {
    if (this.department ||
      this.email ||
      this.faculty ||
      this.firstName ||
      this.gender ||
      this.lastName ||
      this.password ||
      this.state) {
      return confirm('You have an unsave changes. Do you really want discard these change?');
    } else {
      return true;
    }
  }
}
