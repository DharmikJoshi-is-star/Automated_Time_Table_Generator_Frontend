import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeTable } from '../model/timetable.model';
import { Lecture } from '../model/lecture.model';
import { Practical } from '../model/practical.model';

@Injectable()
export class PracticalService{
	constructor(public http: HttpClient) {}

	getAllPracticals(): Observable<HttpResponse<Practical>> {
    return this.http.get<Practical>(
      'http://localhost:8086/getAllPracticals/188',
      {  
        observe: 'response',
      }
    );
	
	}
  
}