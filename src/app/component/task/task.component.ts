import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[]=[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks():void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks=tasks;
      console.log(tasks)
    })
  }

  deleteTask(task:Task) {
    this.taskService.deleteTask(task).subscribe();
    };

  toggleReminder(task: Task){
    task.completed=!task.completed;
   this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    setInterval(()=>{
      this.getAllTasks();
    },2000);
    this.taskService.addTask(task).subscribe();
   
  }

}
