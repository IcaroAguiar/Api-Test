import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './frontend/login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroTabelaComponent } from './cadastro/cadastro-tabela/cadastro-tabela.component'


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'Cadastro', component: CadastroComponent}, {
    path: 'cadastro/tabela',
    component: CadastroTabelaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
