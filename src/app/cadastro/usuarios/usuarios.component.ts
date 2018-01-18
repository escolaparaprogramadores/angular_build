import { element } from 'protractor';
import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit, ErrorHandler, state } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form, FormControl } from '@angular/forms';
import { SelectItem, Message, ConfirmationService } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { UsuarioService } from './services/usuario.service';
import { User } from '../../auth/interfaces/user.model';
import 'rxjs/Rx';
import { PermissaoService } from '../permissao/services/permissao.service';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from '../../breadcrumb.service';
import { DatePipe } from '@angular/common';
import { ClienteService } from '../cliente/services/cliente.service';
import { Response } from '@angular/http/src/static_response';


export class Users  {
  constructor(nome: string, id_user: number, id_cliente: number ) {
    this.nameuser = nome;
    this.id_user = id_user;
   // this.id_cliente = id_cliente;
  }
  id: number;
  name: string;
  permissao: number;
  id_cliente: number;
  id_user: number;
  nameuser: string;
  status = true;
  created_at: Date;
  updated_at: Date;
  email: string;
  senha: string;
  password: string;

}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  idEmpresaUsuarioLogado: number;
  nomeUsuarioLogado: string;
  idUsuarioLogado: number;
  senhaTrue = false;
  pt: any = [];
  usuarios: any = [];
  listaClienteCombo = [];
  listaPermissaoCombo = [];
  formularioCadastro = false;
  dadosUsuarios = new Users(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
  dadosUsuario = new Users(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
  senha: any = [];
  password: any = [];
  display = false;
  msgs: Message[] = [];
  msgsTelaCadastro: Message[] = [];
  acoesRelacionadas: any[];
  columnOptions: SelectItem[];
  lancamentoSelecionado: UsuariosComponent[];
  mostrarSenha = false;
  iconeSenha = 'visibility_off';
  cols = [
    { field: 'name', header: 'NOME', style: 'col-nome' },
    { field: 'email', header: 'EMAIL', style: 'col-email' },
    { field: 'created_at', header: 'CRIAÇÃO', style: 'col-data' },
    //{ field: 'permissao', header: 'PERMISSÃO', style: 'col-permissao' },
    { field: 'updated_at', header: 'ATUALIZAÇÃO', style: 'col-data' },
    { field: 'status', header: 'STATUS', style: 'col-status' }
  ];
  status = [{ label: 'Ativado', value: 1 }, { label: 'Inativado', value: 0 }];

  constructor(
    private usuarioService: UsuarioService,
    private permissaoService: PermissaoService,
    private confirmation: ConfirmationService,
    private title: Title,
    private breadcrumbService: BreadcrumbService,
    private usuarioSistema: AuthService,
    private clientesService: ClienteService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Usuários / Cadastrar Usuários' }
    ]);
  }


  salvar(form: FormControl) {
    this.usuarioService
      .salvar(this.dadosUsuario)
      .toPromise()
      .then((res: Response) => {
        if (`${res.status}` === '400') {
        this.msgsTelaCadastro.push({severity: 'error', summary: `${res. statusText}`, detail: ''});
        }else {
        this.msgs.push({severity: 'success', summary: 'Sucesso!',  detail: 'Usuário salvo com sucesso.'});
        this.listar();
        this.fecharMensagem();
        form.reset();
        this.display = false;
       }
      })
      .catch(erro =>
        this.msgsTelaCadastro.push({severity: 'error', summary: 'Ops!', detail: ' Erro ao tentar salvar o usuário '})
      );
    this.fecharMensagem();
  }

  buscarPorId(id: number) {
    this.usuarioService
      .buscarPorId(id)
      .then(dadosUsuario => {
        if (dadosUsuario.status === 1) {
          dadosUsuario.status = true;
        }
        if (dadosUsuario.status === 0) {
          dadosUsuario.status = false;
        }
        this.dadosUsuario = dadosUsuario;
      })
      .catch(erro =>
        this.msgs.push({
          severity: 'error',
          summary: 'Ops! ',
          detail: 'Erro ao tentar listar o usuário!'
        })
      );
    this.fecharMensagem();
  }

  listar() {
    this.usuarioService
      .lista()
      .then(usuarios => (this.usuarios = usuarios))
      .catch(erro =>
        this.msgs.push({
          severity: 'error',
          summary: 'Ops! ',
          detail: 'Erro ao tentar listar os usuários!'
        })
      );
  }

  excluir(usuario: any) {
    this.usuarioService
      .excluir(usuario.id)
      .then(() => {
        this.msgs.push({
          severity: 'success',
          summary: 'Sucesso!',
          detail: 'Usuário excluido !'
        });
        this.listar();
        this.fecharMensagem();
      })
      .catch(erro =>
        this.msgs.push({
          severity: 'error',
          summary: 'Ops! ',
          detail: 'Erro ao tentar excluir o usuário ' + usuario.name
        })
      );
    this.listar();
    this.fecharMensagem();
  }

  confirmarExclusao(usuario: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(usuario);
      }
    });
  }

  onRowSelect(event) {
    this.buscarPorId(event.data.id);
    this.msgsTelaCadastro = [];
    this.msgs = [];
    this.display = true;
    this.senhaTrue = false;
    this.iconeSenha = 'visibility_off';
    this.mostrarSenha = false;
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
      this.senhaTrue = false;
    } else {
      this.senhaTrue = param;
    }
    this.msgsTelaCadastro = [];
    this.msgs = [];
    this.dadosUsuarios = new Users(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
    this.dadosUsuario = new Users(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
    this.display = param;
    this.iconeSenha = 'visibility_off';
    this.mostrarSenha = false;
  }

  showDialogClose(param: boolean, form: FormControl) {
    this.limparFormulario(form);
    this.msgsTelaCadastro = [];
    this.msgs = [];
    this.display = param;
  }

  listarComboPermissao() {
    return this.permissaoService
      .lista()
      .then(listaPermissaoCombo => {
        this.listaPermissaoCombo = listaPermissaoCombo.map(p => ({
          label: p.permissao,
          value: p.id
        }));
       console.log( this.listaPermissaoCombo);
      })
      .catch(erro =>
        this.msgs.push({severity: 'error', summary: 'Ops! ',   detail: 'Erro ao tentar listar as  permissões!'
        })
      );
  }



  listarComboCliente() {
    return this.clientesService
      .lista()
      .then(listaClienteCombo => {
        this.listaClienteCombo = listaClienteCombo.map(e => ({
          label: e.nome,
          value: e.id
        }));
      })
      .catch(erro =>
        this.msgs.push({severity: 'error', summary: 'Ops! ',   detail: 'Erro ao tentar listar as  permissões!'
        })
      );
  }



  mostrarSenhaTrueOrFalse() {
    if (this.mostrarSenha === false) {
      this.mostrarSenha = true;
      this.iconeSenha = 'visibility';
    } else {
      this.mostrarSenha = false;
      this.iconeSenha = 'visibility_off';
    }
  }

  getUserSistema() {
    this.nomeUsuarioLogado = this.usuarioSistema.getUser().name;
    this.idUsuarioLogado = this.usuarioSistema.getUser().id;
    this.idEmpresaUsuarioLogado = this.usuarioSistema.getUser().id_cliente;
  }



  ngOnInit() {
    this.title.setTitle('Usuários');
    this.listar();
    this.listarComboPermissao();
    this.listarComboCliente();


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
