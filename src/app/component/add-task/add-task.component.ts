import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text:string='';
  date:string='';
  completed:boolean=false;
  showAddTask!:boolean;
  subscription!:Subscription;
  @Output() onAddTask=new EventEmitter();
  constructor(private uiService:UiService ) {
    this.subscription= this.uiService.onToggle().subscribe(
      (value)=>(this.showAddTask = value));
  
  }

  ngOnInit(): void {
  }
onSubmit(){
  if(!this.text){
    alert('Please add a task !');
    return;
  }
  const newTask = {
    name: this.text ,
    date: this.date ,
    completed: this.completed
  }

 this.onAddTask.emit(newTask);

 this.text= '';
 this.date = '';
 this.completed = false ;

}
}
