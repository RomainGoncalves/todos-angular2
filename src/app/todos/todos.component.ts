import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})

export class TodosComponent implements OnInit {

  triggerCompletion(task){
    setTimeout(function(){
      task.completed = !task.completed;
    }, 200);
  }

  @Input() task;

  constructor() { }

  ngOnInit() {
  }

}
