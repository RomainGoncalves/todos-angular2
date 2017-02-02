import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  public tasks;

  constructor() {
    this.tasks = [
      {
        title: 'Swith on the power'
      },
      {
        title: 'Enter password'
      }
    ];
  }
}
