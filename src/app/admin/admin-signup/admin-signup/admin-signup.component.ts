import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  firstName!: string
  lastName!: string
  email!: string
  password!: string
  faculty!: string
  department!: string
  contact_no!: number
  constructor(private adminService: AdminService, private router: Router) { }

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
      contact_no: this.contact_no
    }
    this.adminService.createAdmin(data).subscribe((response) => {
      if (response.status == 200) {
        alert(response.message);
        this.router.navigate(['./admin-dashboard']);
      } else {
        alert(response.message);
      }
    });
  }
}
