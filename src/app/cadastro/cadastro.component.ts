import { Component, OnInit } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';
import { Cadastro } from './cadastro.model';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  cadastro: Cadastro = {
    usuario: '',
    senha: ''
  }


  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }

  createCadastro(){
    this.cadastroService.create(this.cadastro).subscribe(() => {
      this.cadastroService.showMessage('Usuario Cadastrado')
    })
  }

  cancelarCadastro(): void{
    this.router.navigate([''])
  }

  tabelaCadastro():void{
    this.router.navigate(['/cadastro/tabela'])
  }
}
