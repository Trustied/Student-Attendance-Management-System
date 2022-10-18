import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student';
import { AuthService } from '../service/auth.service';
import { StudentService } from '../student/service/student.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private studentService: StudentService,
    private authService: AuthService,
    private router: Router,) { }
  loginDetails!: Student[];

  ngOnInit(): void {
  }
  login() {
    if (this.email === '') {
      alert('The Email Field is Required');
    } else
      if (this.email !== '') {
        let data = {
          email: this.email,
          password: this.password
        }
        this.studentService.login(data).subscribe(
          (res) => {
            if (res.status == 200) {
              alert(res.message);
              let resp = res;
              this.loginDetails = resp;
              //console.log(this.loginDetails);
              localStorage.setItem("login", JSON.stringify(this.loginDetails));
              this.authService.login();
              this.router.navigate(['/student/student-dashboard']);
            }
            else {
              alert(res.message);
              this.authService.logout();
              //  console.log(res);
            }
          }
        );

      }

  }
}
