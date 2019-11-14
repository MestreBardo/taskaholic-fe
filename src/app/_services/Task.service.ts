import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { Tarefa } from '../_Models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  listUpdate = new EventEmitter<Tarefa[]>();
  tasks: any[] = [];
  constructor(private http: HttpClient) { }
  baseUrl = 'https://localhost:44339/Tarefas/';
  jwtHelper = new JwtHelperService();
  createTask(task: Tarefa) {
    // tslint:disable-next-line: prefer-const
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(token);
    // tslint:disable-next-line: object-literal-key-quotes
    this.tasks.push({ 'id': task.Id, 'titulo': task.Titulo, 'descricao': task.Descricao, 'isComplet': task.isComplet});
    console.log(task);
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.post(`${this.baseUrl}register`, { Id: decodedToken.nameid, Tarefas: this.tasks}, {headers: headers} )
    .pipe(
      map((response: any) => {
        this.listUpdate.emit(this.tasks);
        return response;
      })
    );
  }
  GetTarefas() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(token);
    return this.http.post(`${this.baseUrl}GetTarefas`, { 'Id': decodedToken.nameid,'Tarefas': null},  {headers: headers}  )
    .pipe(
      map((response: any) => {
        this.tasks = response;
        return response;
      })
    );
  }
  UpdateTarefa(i: number, task: Tarefa){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(token);
    this.tasks[i] = task;
    // tslint:disable-next-line: object-literal-key-quotes
    return this.http.post(`${this.baseUrl}register`, { 'Id': decodedToken.nameid, 'Tarefas': this.tasks }, {headers: headers}  )
    .pipe(
      map((response: any) => {
        this.tasks = response;
        return response;
      })
    );
  }
  DeleteTask(index: number) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(token);
    this.tasks.splice(index, 1);
    console.log(this.tasks);
    return this.http.post(`${this.baseUrl}register`, { Id: decodedToken.nameid, Tarefas: this.tasks},  {headers: headers} )
    .pipe(
      map((response: any) => {
        this.listUpdate.emit(this.tasks);
        return response;
      })
    );
  }

}
