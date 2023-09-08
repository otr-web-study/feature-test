import ky from 'ky';
import * as API from '@/api';

export type Extra = {
  client: typeof ky;
  api: typeof API;
};
