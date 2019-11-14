import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/_Models/tarefa.model';
import { TaskService } from 'src/app/_services/Task.service';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.scss']
})
export class CriarTarefaComponent implements OnInit {
  errorDisplay = '';
  newTask = false;
  tarefa: Tarefa = {Id: '', Titulo: '', Descricao: '', isComplet: false};
  OnAddNewTask() {
    this.newTask = true;
  }
  adicionarTarefa() {
    if (this.tarefa.Titulo.length < 1) {
      this.errorDisplay = 'Sua Tarefa precisa de um titulo';
    } else {

      this.errorDisplay = '';
      this.tarefa = new Tarefa(null, this.tarefa.Titulo, this.tarefa.Descricao, false);
      this.task.createTask(this.tarefa).subscribe(next => {
        this.tarefa = new Tarefa('', '', '', false);
        this.errorDisplay = '';
        this.newTask = false;
      }, error => {
        this.errorDisplay = error;
      });
    }
  }
  fechar() {
    this.tarefa = new Tarefa('', '', '', false);
    this.errorDisplay = '';
    this.newTask = false;
  }

  constructor(private task: TaskService) { }

  ngOnInit() {
  }

}
