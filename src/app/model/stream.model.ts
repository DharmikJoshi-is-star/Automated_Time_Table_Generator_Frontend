import { StreamStandard } from './streamstandard.model';
import { College } from './college.model';

export class Stream {
  id: Number;
  name: String;
  streamStandards: Array<StreamStandard>;
  college: College;
}
