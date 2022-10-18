import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/service/admin.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendance_list!: any;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllAttendance()
      .subscribe((res) => {
        let response = res;
        this.attendance_list = response;
        //console.log(this.attendance_list);
      });
  }
  filterDate: string = '';
  onFilterTextEnter(data: string) {
    this.filterDate = data;
  }
}
