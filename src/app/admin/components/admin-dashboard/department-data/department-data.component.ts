import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';

@Component({
  selector: 'app-department-data',
  templateUrl: './department-data.component.html',
  styleUrls: ['./department-data.component.css']
})
export class DepartmentDataComponent implements OnInit {

  department_name!: string;
  allDepartmentList: any;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewDepartment() {

    let data = {
      department: this.department_name
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

  getAllDepartment() {
    this.adminService.getAllDepartment()
      .subscribe((res) => {
        let response = res;
        this.allDepartmentList = response;
      });
  }
  updateDepartment() {
    let data = {
      department: this.department_name
    }
    this.adminService.updateDepartment(data).subscribe((response) => {
      if (response.status == 200) {
        alert(response.message);
        this.router.navigate(['./admin-dashboard']);
      } else {
        alert(response.message)
      }
    })
  }
}
