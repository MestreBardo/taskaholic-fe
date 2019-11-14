import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from 'src/app/_Models/tarefa.model';
import { TaskService } from 'src/app/_services/Task.service';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrls: ['./lista-tarefa.component.scss']
})
export class ListaTarefaComponent implements OnInit {
  @Input() index;
  @Input() tarefa;
  modificar = '';
  editingTarefa: Tarefa = this.tarefa;
  isDeleting = false;
  isEdit = false;
  isChangeActive = false;
  onCancelEditing() {
    this.isEdit = false;
    this.isChangeActive = false;
  }
  onCancelDeleting() {
    this.isDeleting = false;
  }
  OnTryDeleting() {
    this.isDeleting = true;
  }
  onChangeActive() {
    this.isChangeActive = !this.isChangeActive;
  }
  onAcceptChangeActive() {
    this.isChangeActive = false;
    this.tarefa.isComplet = !this.tarefa.isComplet;
    this.task.UpdateTarefa(this.index, this.tarefa).subscribe(next => {
      this.isChangeActive = false;
    }, error => {
    });
    this.checkIsComplet();
  }
  OnModify() {
    this.isEdit = false;
    this.isChangeActive = false;
    this.task.UpdateTarefa(this.index, this.editingTarefa).subscribe(next => {
      this.tarefa = this.editingTarefa;
    }, error => {
    });
  }
  onClickEdit() {
    this.isEdit = true;
    this.editingTarefa = this.tarefa;

  }
  onDeleteForReal() {
    this.task.DeleteTask(this.index).subscribe(next => {
    }, error => {
    });
  }

  constructor(private task: TaskService) { }

  ngOnInit() {
    this.checkIsComplet();
  }
  textMarked() {
    if ( this.tarefa.isComplet ) {
      return 'complet';
    }
  }
  checkIsComplet() {
    if (this.tarefa.isComplet) {
      this.modificar = 'Reativar';
    } else {
      this.modificar = 'Concluir';
    }
  }
}
