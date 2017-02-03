import {Injectable} from '@angular/core';

@Injectable()
export class TodosService {

  tasks = [
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

  completedTasks(){

    let completed = [];

    for(let task of this.tasks){
      if(task.completed) completed.push(task);
    }

    return completed;
  }

  pendingTasks(){
    let pending = [];

    for(let task of this.tasks){
      if(!task.completed) pending.push(task);
    }

    return pending;
  }

  constructor() {}
}
