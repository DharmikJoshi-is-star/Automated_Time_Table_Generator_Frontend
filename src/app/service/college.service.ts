import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeTable } from '../model/timetable.model';
import { Lecture } from '../model/lecture.model';
import { College } from '../model/college.model';

@Injectable()
export class CollegeService {
	 constructor(public http: HttpClient) {}

	 getCollege(): Observable<HttpResponse<College>> {
    return this.http.get<College>(
      'http://localhost:8086/getCollege/188',
      {
        observe: 'response',  
      }
    );
  }
}