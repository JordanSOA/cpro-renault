import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  private todoService: TodoService;
  public msgShow: boolean = true;

  constructor(service: TodoService) {
    this.todoService = service;
  }

  ngOnInit(): void {
    this.msgShow = true;
  }

  addNewTask(toAdd: string) {
    var ok = toAdd.trim();
    if(ok.length > 0 ){
      this.todoService.addTask(toAdd);
      this.msgShow = true;
    } else {
      this.msgShow = false;
    }
  }
}
