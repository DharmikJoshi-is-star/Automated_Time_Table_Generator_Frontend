import { Lecture } from './lecture.model';

export class Day {
  public name: String;
  public lectures: Lecture[];
  constructor(name: String, lectures: Lecture[]) {
    this.name = name;
    this.lectures = lectures;
  }
}
