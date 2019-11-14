import { Component, OnInit } from '@angular/core';
import { CrudUserService } from 'src/app/_services/crudUser.service';
import { UserRegister } from 'src/app/_Models/user-register.model';
import { UserShow } from 'src/app/_Models/user-show';

@Component({
  selector: 'app-busca-usuario',
  templateUrl: './busca-usuario.component.html',
  styleUrls: ['./busca-usuario.component.scss']
})
export class BuscaUsuarioComponent implements OnInit {
  errorDisplay = '';
  searching = false;
  users: UserRegister[] = [];
  buscaParam = '';
  constructor(private crudUser: CrudUserService) {
   }
  onSearching() {
    this.crudUser.getUsers(this.buscaParam).subscribe(next => {
      this.users = [];
      this.searching = true;
      this.errorDisplay = '';
      next.map(x => this.users.push(x));
    }, error => {
      console.log(error);
      this.errorDisplay = 'Não foi encontrado nenhum usuário';
    });

  }
  ngOnInit() {
  }

}
