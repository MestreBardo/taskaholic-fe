import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/Auth.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReistraSuarioComponent } from './usuarios/reistra-suario/reistra-suario.component';
import { RegistraUsuarioComponent } from './usuarios/registra-usuario/registra-usuario.component';
import { BuscaUsuarioComponent } from './usuarios/busca-usuario/busca-usuario.component';
import { CardUsuarioComponent } from './usuarios/busca-usuario/card-usuario/card-usuario.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ListaTarefaComponent } from './tarefas/lista-tarefa/lista-tarefa.component';
import { CriarTarefaComponent } from './tarefas/criar-tarefa/criar-tarefa.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MenuComponent } from './menu/menu.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      UsuariosComponent,
      ReistraSuarioComponent,
      RegistraUsuarioComponent,
      BuscaUsuarioComponent,
      CardUsuarioComponent,
      TarefasComponent,
      ListaTarefaComponent,
      CriarTarefaComponent,
      MenuComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
