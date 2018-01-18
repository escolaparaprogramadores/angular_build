import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SelectItem, Message, ConfirmationService } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { PermissaoService } from './services/permissao.service';
import { AuthService } from '../../auth/services/auth.service';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from '../../breadcrumb.service';


export class Permissao {
  constructor(nome: string, id_user: number, id_cliente: number ) {
    this.id_usuario = id_user;
    this.id_cliente = id_cliente;
    this.name_user = nome;
  }
  id: number;
  permissao: string;
  id_usuario: number;
  id_cliente: number;
  name_user: string;
  created_at: Date;
  updated_at: Date;
}

@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html',
  styleUrls: ['./permissao.component.css']
})

export class PermissaoComponent implements OnInit {

  idEmpresaUsuarioLogado: number;
  nomeUsuarioLogado: string;
  idUsuarioLogado: number;
  pt: any = [];
  permissoes: any = [];
  dadosPermissoes = new Permissao(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
  dadosPermissao = new Permissao( this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
  display = false;
  msgs: Message[] = [];
  msgsTelaCadastro: Message[] = [];
  acoesRelacionadas: any[];
  columnOptions: SelectItem[];
  permissaoSelecionada: PermissaoComponent[];

  cols = [
    { field: 'permissao', header: 'PERMISSÃO', style: 'col-permissao' },
  ];


  constructor(
    private permissaoService: PermissaoService,
    private confirmation: ConfirmationService,
    private title: Title,
    private breadcrumbService: BreadcrumbService,
    private usuarioSistema: AuthService,
  ) {
    this.breadcrumbService.setItems([
      { label: 'Permissões / Cadastrar permissões' }
    ]);
  }


  salvar(form: FormControl) {
    this.permissaoService
      .salvar(this.dadosPermissao)
      .toPromise()
      .then((res: Response) => {
        if (`${res.status}` === '400') {
        this.msgsTelaCadastro.push({severity: 'error', summary: `${res. statusText}`, detail: ''});
        }else {
        this.msgs.push({severity: 'success', summary: 'Sucesso!',  detail: 'Permissão salva com sucesso.'});
        this.listar();
        this.fecharMensagem();
        form.reset();
        this.display = false;
       }
      })
      .catch(erro =>
        this.msgsTelaCadastro.push({severity: 'error', summary: 'Ops!', detail: ' Erro ao tentar salvar a permissão '})
      );
    this.fecharMensagem();
  }

  buscarPorId(id: number) {
    this.permissaoService
      .buscarPorId(id)
      .then(dadosPermissao => {
        this.dadosPermissao = dadosPermissao;
      })
      .catch(erro =>
        this.msgs.push({severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar a permissão!'})
      );
    this.fecharMensagem();
  }

  listar() {
    this.permissaoService.lista()
      .then(permissoes => (this.permissoes = permissoes))
      .catch(erro =>
        this.msgs.push({severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar as permissões!'})
      );
  }

  excluir(permissao: any) {
    this.permissaoService
      .excluir(permissao.id)
      .then(() => {
        this.msgs.push({severity: 'success', summary: 'Sucesso!', detail: 'Permissão excluida !'
        });
        this.listar();
        this.fecharMensagem();
      })
      .catch(erro =>
        this.msgs.push({severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar a permissão!'})
      );
    this.listar();
    this.fecharMensagem();
  }

  confirmarExclusao(permissao: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(permissao);
      }
    });
  }

  onRowSelect(event) {
    this.buscarPorId(event.data.id);
    this.msgsTelaCadastro = [];
    this.msgs = [];
    this.display = true;
  }

  fecharMensagem() {
    setTimeout(() => {
      this.msgs = [];
      this.msgsTelaCadastro = [];
    }, 5000);
  }

  limparFormulario(form: FormControl) {
    form.reset();
  }

  showDialogOpen(param: boolean, id: number) {
    if (id) {
      this.buscarPorId(id);
    }
    this.msgsTelaCadastro = [];
    this.msgs = [];
    this.dadosPermissoes = new Permissao(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
    this.dadosPermissao = new Permissao(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
    this.display = param;
  }

  showDialogClose(param: boolean, form: FormControl) {
    this.limparFormulario(form);
    this.msgsTelaCadastro = [];
    this.msgs = [];
    this.display = param;
  }


  getUserSistema() {
    this.idUsuarioLogado = this.usuarioSistema.getUser().id;
    this.idEmpresaUsuarioLogado = this.usuarioSistema.getUser().id_cliente;
    this.nomeUsuarioLogado = this.usuarioSistema.getUser().name;
  }



  ngOnInit() {
    this.title.setTitle('Permissões');
    this.listar();


    this.columnOptions = [];
    for (let i = 0; i < this.cols.length; i++) {
      this.columnOptions.push({
        label: this.cols[i].header,
        value: this.cols[i]
      });
    }

    this.acoesRelacionadas = [
      {
        label: 'Início',
        icon: 'fa-home',
        url: 'http://localhost:4200/#/admin/dashboard'
      },
      {
        label: 'Usuário',
        icon: 'ui-icon-person-add',
        url: 'http://localhost:4200/#/admin/usuarios'
      },
      {
        label: 'Clientes',
        icon: 'ui-icon-domain ',
        url: 'http://localhost:4200/#/admin/cliente'
      },
      {
        label: 'Permissões',
        icon: 'ui-icon-lock',
        url: 'http://localhost:4200/#/admin/permissao'
      },
      {
        label: 'Modulos',
        icon: 'ui-icon-widgets',
        url: 'http://localhost:4200/#/admin/modulo'
      },
      {
        label: 'Veículo',
        icon: 'ui-icon-train',
        url: 'http://localhost:4200/#/admin/veiculo'
      },
      {
        label: 'Funcionário',
        icon: 'ui-icon-people',
        url: 'http://localhost:4200/#/pessoa'
      }
    ];



    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
      monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agsoto',
                   'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthNamesShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
      today: 'Today',
      clear: 'Clear'
  };
  }


}
