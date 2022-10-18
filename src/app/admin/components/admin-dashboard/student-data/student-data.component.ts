import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/service/admin.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  allStudentList: any = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllStudent()
      .subscribe((res) => {
        let response = res;
        this.allStudentList = response;
      });
  }

}
