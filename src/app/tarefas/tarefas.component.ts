import { Component, OnInit } from '@angular/core';
import { TaskService } from '../_services/Task.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {
  tarefas: any[] = [];
  constructor(private task: TaskService) {
    this.task.listUpdate.subscribe(
      x => console.log(x)
    );
   }

  ngOnInit() {
    this.task.GetTarefas().subscribe(next => {
      console.log(next);
      this.tarefas = next;
    }, error => {
    });
  }

}
