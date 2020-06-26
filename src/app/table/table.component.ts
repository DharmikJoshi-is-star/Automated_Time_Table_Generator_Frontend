import { Component, OnInit , ElementRef, ViewChild,AfterViewInit} from '@angular/core';
import { LectureService } from '../service/lecture.service';
import { CollegeService } from '../service/college.service';
import { Lecture } from '../model/lecture.model';
import { TimeTable } from '../model/timetable.model';
import { Day } from '../model/day.model';
import { Practical } from '../model/practical.model';
import { Batch } from '../model/batch.model';
import { College } from '../model/college.model';
import { Stream } from '../model/stream.model';
import { StreamStandard } from '../model/streamstandard.model';
import {StreamStandardService} from '../service/streamstandard.service';
import { SubjectService } from '../service/subject.service';
import { PracticalService } from '../service/practical.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

@ViewChild('queryStream') queryStream: ElementRef;

@ViewChild('queryStreamStandard') queryStreamStandard: ElementRef;

  streamIndex;
  standardIndex;

  nameOfDays=["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];

  selectStandardList: StreamStandard[];

  college: College;
  streamStandards;
  timeTable: TimeTable;
  subjects;
  practicals;
  streams: Array<Stream>;
  standards:Array<StreamStandard>;


  public displayed:Boolean = false;
  public show: Boolean;
  public days: Day[] = Day[5];

  constructor(public lectureService: LectureService, 
                public collegeService: CollegeService, 
                  public streamStandardService: StreamStandardService,
                    public subjectService: SubjectService, 
                      public practicalService: PracticalService) {}

  ngOnInit(): void {

    this.lectureService.getAllLectures().subscribe((resp) => {
      console.log(resp.body);
      this.timeTable = resp.body;
    });

    this.collegeService.getCollege().subscribe((resp) => {
      console.log(resp.body);
      this.college = resp.body;

      console.log(this.college.streams)
      this.streams = this.college.streams;

    });

    this.streamStandardService.getAllStreamStandards().subscribe((resp) => {
      console.log(resp.body);
      this.streamStandards = resp.body;
    });

   this.subjectService.getAllSubjects().subscribe((resp) => {
      console.log(resp.body);
      this.subjects = resp.body;
    });

    this.practicalService.getAllPracticals().subscribe((resp) => {
      console.log(resp.body);
      this.practicals = resp.body;
    });


  }

  showTable(): void {
    this.show = true;
    console.log('clicked');

    let arrayDay = [];

    console.log(arrayDay);

    for (let day = 0; day < this.timeTable.lectures.length; day++) {
      let tempArray: Lecture[] = [];
      for (
        let lec = 0;
        lec < this.timeTable.lectures[day][this.streamIndex][this.standardIndex].length;
        lec++
      ) {
        console.log(this.timeTable.lectures[day][this.streamIndex][this.standardIndex][lec]);
        
        tempArray.push(this.timeTable.lectures[day][this.streamIndex][this.standardIndex][lec]);
      }
      let dayObj = new Day(day + '', tempArray);
      arrayDay.push(dayObj);
      console.log(dayObj);
    }

    this.days = arrayDay;
    console.log(this.days);
  }

  onChangeStream(queryStream: Stream){

   console.log(this.queryStream.nativeElement.selectedOptions[0].value);

   this.streamIndex= this.queryStream.nativeElement.selectedOptions[0].value;
    
    console.log(this.college.streams[this.streamIndex].id);
    
    let localStandardList = [];
    
    for (var i = 0; i <= this.streamStandards.length - 1 ; i++) {
         
         if(this.college.streams[this.streamIndex].id == this.streamStandards[i].stream.id){
          console.log(this.streamStandards[i]);
           
           localStandardList.push(this.streamStandards[i]);

         }
       }   

       console.log(localStandardList.length);
    
      this.selectStandardList = localStandardList;

  }

  onChangeSTreamStandard(queryStreamStandard: Stream){

     console.log(this.queryStreamStandard.nativeElement.selectedOptions[0].value);

      this.standardIndex= this.queryStreamStandard.nativeElement.selectedOptions[0].value;

  }
 
}
