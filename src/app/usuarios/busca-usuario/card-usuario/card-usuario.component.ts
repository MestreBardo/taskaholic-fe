import { Component, OnInit, Input } from '@angular/core';
import { UserRegister } from 'src/app/_Models/user-register.model';
import { CrudUserService } from 'src/app/_services/crudUser.service';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.scss']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: UserRegister;
  Desativado = '';
  errorDisplay = '';
  isEdit = false;
  isChangeActive = false;
  editingUser: UserRegister = new UserRegister('', '', '', '', '', '', true);
  constructor(private crudService: CrudUserService) { }

  onChangeActive() {
    this.isChangeActive = !this.isChangeActive;
  }
  onClickEdit() {
    this.isEdit = true;
    this.editingUser = new UserRegister(this.user.id, this.user.email, '', '', this.user.name, this.user.role, this.user.isActive);
  }
  onCancelEdit() {
    this.isEdit = false;
  }
  userCheck() {
    if (this.user.isActive) {
      return 'Ativo';
    } else {
      return 'Desativado';
    }
  }
  userRole() {
    if (this.user.role === 'admin') {
      return 'Administrador';
    } else {
      return 'Utilizador';
    }
  }
  onSaveEdit() {
    if (!this.user.email.includes('@')) {
      this.errorDisplay = 'Por favor inserir um email correto.';
    } else if (this.editingUser.password !== this.editingUser.reinputPassword) {
      this.errorDisplay = 'As senhas digitadas não coicidem.';
    } else if (this.editingUser.password.length < 8 && this.editingUser.password.length > 0) {
      this.errorDisplay = 'A senha deve ter no minimo 8 digitos';
    } else if (this.editingUser.name.length < 3) {
      this.errorDisplay = 'Verifique seu nome';
    } else {
      const userNovo: UserRegister = new UserRegister(this.user.id, null, null, null, null, null, this.user.isActive);

      if (this.user.name !== this.editingUser.name) {
        userNovo.name = this.editingUser.name;
      }
      if (this.user.email !== this.editingUser.email) {
        userNovo.email = this.editingUser.email;
      }
      if (this.editingUser.password !== '' && this.editingUser.password !== '') {
        userNovo.password = this.editingUser.password;
        userNovo.reinputPassword = this.editingUser.reinputPassword;
      }
      this.crudService.changeUsersData(userNovo).subscribe(next => {
        this.isEdit = false;
        this.user = this.editingUser;
      }, error => {
        this.errorDisplay = error;
      });
    }
  }
  onSaveActive() {
    this.crudService.changeUsersActive(this.user.id, !this.user.isActive).subscribe(next => {
      this.user.isActive = !this.user.isActive;
      if (this.user.isActive) {
        this.Desativado = 'Desativar';
      } else {
        this.Desativado = 'Reativar';
      }
      this.isEdit = false;
      this.isChangeActive = false;

    }, error => {
      console.log(error);
    });
  }
  ngOnInit() {
    this.checkDesativado();
  }

  checkDesativado() {
    if (this.user.isActive) {
      this.Desativado = 'Desativar';
    } else {
      this.Desativado = 'Reativar';
    }
  }

}
