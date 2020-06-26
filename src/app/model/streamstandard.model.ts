import { Subject } from './subject.model';
import { Practical } from './practical.model';
import { Stream } from './stream.model';
import { Batch } from './batch.model';

export class StreamStandard {
  id: Number;
  name: String;
  subjects: Array<Subject>;
  practicals: Array<Practical>;
  batchs: Array<Batch>;
  stream: Stream;
}
