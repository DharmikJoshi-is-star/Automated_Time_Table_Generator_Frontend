import { Stream } from './stream.model';
import { Faculty } from './faculty.model';

export class College {
  id: Number;
  name: String;
  streams: Array<Stream>;
  faculties: Array<Faculty>;
}
