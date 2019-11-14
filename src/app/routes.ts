import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { AppComponent } from './app.component';
import { RegistraUsuarioComponent } from './usuarios/registra-usuario/registra-usuario.component';
import { BuscaUsuarioComponent } from './usuarios/busca-usuario/busca-usuario.component';
import { AuthGuardGuard } from './_guards/auth-guard.guard';
import { AdminGuardGuard } from './_guards/admin-guard.guard';

export const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'home',  component: HomeComponent, canActivate: [AdminGuardGuard] },
    { path: 'home/usuarios/registra', component: RegistraUsuarioComponent, canActivate: [AdminGuardGuard, AuthGuardGuard] },
    { path: 'home/usuarios/busca', component: BuscaUsuarioComponent, canActivate: [AdminGuardGuard, AuthGuardGuard]  },
    { path: 'home/tarefas', component: TarefasComponent, canActivate: [AdminGuardGuard] },
]

