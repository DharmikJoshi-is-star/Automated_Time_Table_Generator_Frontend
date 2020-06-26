import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeTable } from '../model/timetable.model';
import { Lecture } from '../model/lecture.model';
import { Subject } from '../model/subject.model';

@Injectable()
export class SubjectService{
	constructor(public http: HttpClient) {}

	getAllSubjects(): Observable<HttpResponse<Subject>> {
    return this.http.get<Subject>(
      'http://localhost:8086/getAllSubjects/188',
      {
        observe: 'response',
      }
    );}  
  
}