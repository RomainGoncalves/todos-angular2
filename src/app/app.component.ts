import {Component} from '@angular/core';
import {TodosService} from "./todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  constructor(
    private todoService:TodosService
  ){}
}
