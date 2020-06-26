import { Subject } from './subject.model';
import { Practical } from './practical.model';
import { Faculty } from './faculty.model';
import { Batch } from './batch.model';

export class Lecture {
  id: Number;
  isSubject: Boolean;
  subject: Subject;
  practical: Practical;
  lectureNo: Number;
  lectureSession: String;
  lectureHour: String;
  lectureDay: String;
  timming: String;
  faculty: Faculty;
  isBatchPractical: Boolean;
  practicalBatchWise: Map<Practical, Batch>;
  practicals: Array<Practical>;
}
