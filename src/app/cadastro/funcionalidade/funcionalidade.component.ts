import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SelectItem, Message, ConfirmationService } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

import { AuthService } from '../../auth/services/auth.service';
import { FuncionalidadeService } from './services/funcionalidade.service';


@Component({
  selector: 'app-funcionalidade',
  templateUrl: './funcionalidade.component.html',
  styleUrls: ['./funcionalidade.component.css']
})
export class FuncionalidadeComponent implements OnInit {

  funcionalidades: any = [];
  total: any = [];
  msgs: any = [];
  display: boolean = false;
  dadosFuncionalidade: any = {
    funcionalidade: '',
    rota: '',
    icone: '',
    id_usuario: '',
  };



  lancamentos = [];
  acoesRelacionadas: any[];
  cols: any[];
  columnOptions: SelectItem[];


  constructor(
    private permissaoService: FuncionalidadeService,
    private confirmation: ConfirmationService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) { }


  showDialog() {
    this.display = true;
  }

  showDialogFalse() {
    this.display = false;
    this.dadosFuncionalidade = [];
  }

  ngOnInit() {

    const codigoLancamento = this.route.snapshot.params['codigo'];

    /*if (codigoLancamento) {
          this.carregarLancamento(codigoLancamento);
        }*/

    this.listar();

    this.cols = [

      { field: 'id', header: 'Código', style: 'col-descricao' },
      { field: 'funcionalidade', header: 'Funcionalidade', },
      { field: 'rota', header: 'Rota', },
      { field: 'icone', header: 'Icone', },
      /*  { field: 'permissao', header: 'Permissão', style: 'col-data' },
        { field: 'status', header: 'Status', style: 'col-data' }*/
    ];

    this.columnOptions = [];
    for (let i = 0; i < this.cols.length; i++) {
      this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
    }

    this.acoesRelacionadas = [

      {
        label: 'Início', icon: 'fa-home', url: 'http://localhost:4200/#/empty'
      },
      {
        label: 'Usuário', icon: 'fa-user-plus', url: 'http://localhost:4200/#/admin/usuario'
      },
      {
        label: 'Clientes', icon: 'fa-building ', url: 'http://localhost:4200/#/cliente'
      },
      {
        label: 'Permissões', icon: 'fa-user-secret', url: 'http://localhost:4200/#/permissao'
      },
      {
        label: 'Veículo', icon: 'fa-bus', url: 'http://localhost:4200/#/veiculo'
      },
      {
        label: 'Funcionário', icon: 'fa-users', url: 'http://localhost:4200/#/pessoa'
      }
    ];



  }

  listar() {
    this.permissaoService.lista()
      .then(res => this.funcionalidades = res)
      .then(total => this.total = this.funcionalidades.length)
      .catch(erro =>
        this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar os usuários!' }));
    //  console.log(this.permissoes);
  }



  salvar(dadosFuncionalidade) {
    //console.log(dadosUsuario);
    this.permissaoService.cadastro(this.dadosFuncionalidade)
      .subscribe(res => {

        // console.log(res);

        if (res) {
          this.display = false;
          this.listar();
          /// this.dadosPermissao = [];
          this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Permissão Cadastrada com Sucesso !' });

          setTimeout(() => {
            this.msgs = [];
          }, 4000);
        }
        if (!res) {
          this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar cadastrar Usuário ' });


          setTimeout(() => {
            this.msgs = [];
          }, 5000);
        }

        this.dadosFuncionalidade = [];

      });

  }




  confirmarExclusao(funcionalidade: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(funcionalidade);
      }
    });
  }


  excluir(funcionalidade: any) {
    this.permissaoService.excluir(funcionalidade.id)
      .then(() => {
        this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Usuário excluido !' });
        this.ngOnInit();
      })
      .catch(erro =>
        this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar excluir o usuário ' + funcionalidade.permissao }));


    setTimeout(() => {
      this.msgs = [];
    }, 5000);

  }

}
