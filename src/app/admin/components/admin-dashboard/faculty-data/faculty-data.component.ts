import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';

@Component({
  selector: 'app-faculty-data',
  templateUrl: './faculty-data.component.html',
  styleUrls: ['./faculty-data.component.css']
})
export class FacultyDataComponent implements OnInit {
  faculty_name: any = '';
  department: any = '';
  allFacultyList: any = [];
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
  addNewFaculty() {
    if (this.faculty_name != '') {
      let data = {
        title: [this.faculty_name,
        this.department]
      }
      this.adminService.addFaculty(data).subscribe((response) => {
        if (response.status == 200) {
          alert(response.message);
          this.router.navigate(['./admin-dashboard']);
        } else {
          alert(response.message)
        }
      })
    }
  }

  addNewDepartment() {

    let data = {
      department: this.department
    }
    this.adminService.addDepartment(data).subscribe((response) => {
      if (response.status == 200) {
        alert(response.message);
        this.router.navigate(['./admin-dashboard']);
      } else {
        alert(response.message)
      }
    })
  }

  getAllFaculty() {
    this.adminService.getAllFaculty()
      .subscribe((res) => {
        let response = res;
        this.allFacultyList = response;
      });
  }
  updateFaculty() {
    let data = {
      department: this.department
    }
    this.adminService.updateFaculty(data).subscribe((response) => {
      if (response.status == 200) {
        alert(response.message);
        this.router.navigate(['./admin-dashboard']);
      } else {
        alert(response.message)
      }
    })
  }
}
