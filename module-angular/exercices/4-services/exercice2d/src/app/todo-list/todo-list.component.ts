import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public tasks: string[];
  private todoService: TodoService;

  constructor(service: TodoService ) {
    this.todoService =  service;
  }

  ngOnInit(): void {
    this.tasks =  this.todoService.getTasks();
  }

  removeTask(task: string){
    var a = this.tasks.indexOf(task);
    this.todoService.removeTask(a);
  }
}
