import {Injectable} from '@angular/core';

@Injectable()
export class TodosService {

  public tasks;

  constructor() {
    this.tasks = [
      {
        title: 'Switch on the power'
      },
      {
        title: 'Enter password'
      }
    ];
  }
}
