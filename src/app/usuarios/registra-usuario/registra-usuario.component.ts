import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/_Models/user-register.model';
import { CrudUserService } from 'src/app/_services/crudUser.service';

@Component({
  selector: 'app-registra-usuario',
  templateUrl: './registra-usuario.component.html',
  styleUrls: ['./registra-usuario.component.scss']
})
export class RegistraUsuarioComponent implements OnInit {
  user: UserRegister = new UserRegister('', '', '', '', '', 'basic', true);
  errorDisplay = '';
  constructor(private crudUser: CrudUserService) { }

  login() {
    if (!this.user.email.includes('@')) {
      this.errorDisplay = 'Por favor inserir um email correto.';
    } else if (this.user.password !== this.user.reinputPassword) {
      this.errorDisplay = 'As senhas digitadas não coicidem.';
    } else if (this.user.password.length < 8) {
      this.errorDisplay = 'A senha deve ter no minimo 8 digitos';
    } else if (this.user.name.length < 3) {
      this.errorDisplay = 'Verifique seu nome';
    } else {
      this.crudUser.createUser(this.user).subscribe(next => {
        this.user = new UserRegister('', '', '', '', '', 'basic', true);
      }, error => {
        this.errorDisplay = error;
      });
    }

  }
  onCancelRegister() {
    this.user = new UserRegister('', '', '', '', '', 'basic', true);
  }
  ngOnInit() {
  }

}
