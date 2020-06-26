import { Faculty } from './faculty.model';
import { StreamStandard } from './streamstandard.model';
import { Batch } from './batch.model';

export class Practical {
  id: Number;
  name: String;
  practicalCode: String;
  preferredSession: String;
  sessionHours: Number;
  singleSession: Number;
  lab: String;
  accordingToBatch: Boolean;
  batches: Map<Batch, Boolean>;
  streamstandard: StreamStandard;
  faculty: Faculty;
  batch: Batch;
}
