import { Component, OnInit } from '@angular/core';


import { LazyLoadEvent } from 'primeng/components/common/api';
import { RouterLink } from '@angular/router';
import { PessoaFiltro, PessoaService } from './../pessoa.service';
import { Message, SelectItem, ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit{

  pessoas = [];
  total: any;
  display = false;
  msgs: Message[] = [];
  acoesRelacionadas: any[];
  cols: any[];
  columnOptions: SelectItem[];
  selectedLancamento: PessoasPesquisaComponent[];



  constructor (private pessoaService: PessoaService,
               private confirmation: ConfirmationService,

   ) { }


   ngOnInit() {

    this.pesquisar ();


    this.cols = [
      {field: 'nome', header: 'Nome', style: 'col-nome'},
      {field: 'endereco.cidade', header: 'Cidade', style: 'col-cidade'},
      {field: 'endereco.estado', header: 'Estado', style: 'col-estado'}

  ];

  this.acoesRelacionadas = [

    {
      label: 'Início', icon: 'ui-icon-home', url: 'http://localhost:4200/#/empty'
    },
    {
      label: 'Uusuário', icon: 'ui-icon-person', routerLink: ['/usuario']
    },
    {
      label: 'Clientes', icon: 'ui-icon-domain', url: 'http://localhost:4200/#/cliente'
    },
    {
      label: 'Permissões', icon: 'ui-icon-lock', url: 'http://localhost:4200/#/permissao'
    },
    {
      label: 'Veículo', icon: 'ui-icon-train', url: 'http://localhost:4200/#/veiculo'
    },
    {
      label: 'Funcionário', icon: 'ui-icon-people', url: 'http://localhost:4200/#/pessoa'
  }
];


  this.columnOptions = [];
  for (let i = 0; i < this.cols.length; i++) {
      this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
  }


  }



  showDialog() {
    this.display = true;
  }


  pesquisar() {
    this.pessoaService.pesquisar()
      .then(pessoas => this.pessoas = pessoas)
      .then( total => this.total = this.pessoas.length)
      .catch(erro =>
        this.msgs.push({severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar!'}));
  }




confirmarExclusao(pessoa: any) {
  this.confirmation.confirm({
    message: 'Tem certeza que deseja excluir?',
    accept: () => {
      this.excluir(pessoa);
    }
  });
}


excluir(pessoa: any) {
  this.pessoaService.excluir(pessoa.codigo)
    .then(() => {
        this.msgs.push({severity: 'success', summary: pessoa.nome + ' excluida com sucesso!'});
        this.pesquisar();
      })
      .catch(erro =>
        this.msgs.push({severity: 'error', summary: 'Ops! ', detail:'Erro ao tentar excluir ' + pessoa.nome}));

        setTimeout(() => {
          this.msgs =  [];
        }, 5000);
      }


      alternarStatus(pessoa: any): void {
        const novoStatus = !pessoa.ativo;

        this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
          .then(() => {
            const acao = novoStatus ? 'ativada' : 'desativada';

            pessoa.ativo = novoStatus;
            this.msgs.push({severity: 'success', summary: pessoa.nome + ' Status alterado com sucesso!'});
            this.pesquisar();
          })
          .catch(erro =>
            this.msgs.push({severity: 'error', summary: 'Ops! ', detail:'Erro ao tentar mudar o status ' + pessoa.nome}));

            setTimeout(() => {
              this.msgs =  [];
            }, 5000);
      }



}
