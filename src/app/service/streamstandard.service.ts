import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeTable } from '../model/timetable.model';
import { Lecture } from '../model/lecture.model';
import { College } from '../model/college.model';
import { StreamStandard } from '../model/streamstandard.model';

@Injectable()
export class StreamStandardService{

	constructor(public http: HttpClient) {}

	 getAllStreamStandards(): Observable<HttpResponse<StreamStandard>> {
    return this.http.get<StreamStandard>(
      'http://localhost:8086/getAllStreamStandards/188',
      {
        observe: 'response',
      }
    );  
  }


  
}