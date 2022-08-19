import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './frontend/login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroTabelaComponent } from './cadastro/cadastro-tabela/cadastro-tabela.component';
import { CadastroUpdateComponent } from './cadastro/cadastro-update/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './cadastro/cadastro-delete/cadastro-delete/cadastro-delete.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent}, {
    path: 'cadastro/tabela',
    component: CadastroTabelaComponent,
  },
  {
    path: 'cadastro/update/:id',
    component: CadastroUpdateComponent,
  },
  {
    path: 'cadastro/delete/:id',
    component: CadastroDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
