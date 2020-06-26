import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeTable } from '../model/timetable.model';
import { Lecture } from '../model/lecture.model';

@Injectable()
export class LectureService {
  constructor(public http: HttpClient) {}

  getAllLectures(): Observable<HttpResponse<TimeTable>> {
    return this.http.get<TimeTable>(
      'http://localhost:8086/generateTimeTable/188',
      {
        observe: 'response',
      }
    );
  }
}
  