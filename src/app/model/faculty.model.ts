import { Subject } from './subject.model';
import { Practical } from './practical.model';
import { College } from './college.model';

export class Faculty {
  id: Number;
  name: String;
  facultyCode: String;
  subjects: Array<Subject>;
  practicals: Array<Practical>;
  college: College;
}
