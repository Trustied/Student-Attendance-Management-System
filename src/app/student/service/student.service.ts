import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { myConfigs } from 'src/app/admin/config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  createStudent(data: any): Observable<any> {
    return this.http.post(myConfigs.apiURL + '/create_student', data);
  }

  login(data: any): Observable<any> {
    return this.http.post(myConfigs.apiURL + '/api/login', data);
  }

  markAttendance(data: any): Observable<any> {
    return this.http.post(myConfigs.apiURL + '/take_attendance', data);
  }
}
