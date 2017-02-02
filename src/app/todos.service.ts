import {Injectable} from '@angular/core';

@Injectable()
export class TodosService {

  public tasks;

  constructor() {
    this.tasks = [
      {
        title: 'Switch on the power',
        completed: false
      },
      {
        title: 'Enter password',
        completed: false
      },
      {
        title: 'Use the computer',
        completed: false
      }
    ];
  }
}
