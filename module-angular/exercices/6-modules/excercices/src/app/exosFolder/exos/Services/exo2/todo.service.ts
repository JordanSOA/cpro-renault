import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasks: string[] = ["Finish exos"];

  constructor() { }

  public addTask(taskToAdd: string) {
    this.tasks.push(taskToAdd);
  }
  public getTasks() {
    return this.tasks;
  }
  removeTask(a: number) {
    for (let task of this.tasks) {
      if (this.tasks.indexOf(task) === a) {
        this.tasks.splice(a, 1);
      }
    }
  }
}
