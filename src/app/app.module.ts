import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { LectureService } from './service/lecture.service';
import { CollegeService } from './service/college.service';
import { StreamStandardService } from './service/streamstandard.service';
import { SubjectService } from './service/subject.service';
import { PracticalService } from './service/practical.service';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, TableComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LectureService, CollegeService, StreamStandardService, SubjectService, PracticalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
