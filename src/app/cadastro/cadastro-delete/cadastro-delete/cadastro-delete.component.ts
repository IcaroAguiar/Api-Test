import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../../cadastro.service';
import { Cadastro } from '../../cadastro.model';


@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {

  cadastro!: Cadastro




  constructor(private router: Router, private cadastroService: CadastroService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cadastroService.readById(id).subscribe((cadastro) => {
      this.cadastro = cadastro;
    })
  }

  deleteCadastro(): void{
    this.cadastroService.deleteCadastro(this.cadastro.id!).subscribe(() => {
      this.cadastroService.showMessage('Cadastro Deletado')
    })
  }
  cancelarCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])
  }
  tabelasCadastro(): void{
  this.router.navigate(['/cadastro/tabela'])
}
}
