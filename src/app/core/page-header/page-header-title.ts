import * as uuid from 'uuid';

export class PageHeaderTitle {
  constructor(readonly name: string, readonly id = uuid.v4()) {
  }
}
