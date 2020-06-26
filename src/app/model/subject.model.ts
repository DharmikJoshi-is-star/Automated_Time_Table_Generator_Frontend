import { Faculty } from './faculty.model';
import { StreamStandard } from './streamstandard.model';

export class Subject {
  id: Number;
  name: String;
  subjectCode: String;
  preferredSession: String;
  sessionHours: Number;
  roomNo: String;
  faculty: Faculty;
  streamstandard: StreamStandard;
}
