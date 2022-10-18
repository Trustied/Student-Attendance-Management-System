import { Component, OnInit } from '@angular/core';
import { LoginDetailsService } from './service/login-details.service';
import { StudentService } from './service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
