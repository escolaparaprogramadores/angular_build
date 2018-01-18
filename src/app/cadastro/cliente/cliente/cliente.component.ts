
import { element } from 'protractor';
import { AuthService } from '../../../auth/services/auth.service';
import { Component, OnInit, ErrorHandler, state } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form, FormControl } from '@angular/forms';
import { SelectItem, Message, ConfirmationService, GrowlModule } from 'primeng/primeng';
import 'rxjs/Rx';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from '../../../breadcrumb.service';
import { DatePipe } from '@angular/common';
import { Users } from '../../usuarios/usuarios.component';
import { ClienteService } from '../services/cliente.service';


export class Clientes  {
  constructor(nome: string, id_user: number, id_cliente: number ) {
    this.name_user = nome;
    this.id_user = id_user;
    this.id_cliente = id_cliente;
  }
  id: number;
  nome: string;
  apelido: string;
  cnpj: string;
  inscricao_estadual: string;
  inscricao_municipal: string;
  localidade: string;
  bairro: string;
  telefone: string;
  celular: string;
  email: string;
  site: string;
  status = true;
  // seguimento = new Seguimento();
  name_user: string;
  id_user: number;
  id_cliente: number;
  tipo_cliente = 'PJ';
  rg: string;
  cpf: string;
  created_at: Date;
  updated_at: Date;
  logradouro: string;
  uf: string;
  complemento: string;
  numero: string;
  cep: number;


}




@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent   implements OnInit {
  mostraOpcaoTipoEmpresaPJ = true;
  mostraOpcaoTipoEmpresaPF = true;
  nomeUsuarioLogado: string;
  idUsuarioLogado: number;
  idEmpresaUsuarioLogado: number;
  pt: any = [];
  clientes: any = [];
  listaEstadoCombo = [];
  listaSeguimentoCombo = [];
  formularioCadastro = false;
  id_usuario: any = [];
  dadosClientes = new Clientes(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
  dadosCliente  = new Clientes(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
  senha: any = [];
  password: any = [];
  retornoCadastro: any = [];
  total: any;
  lancamentos = [];
  display = false;
  msgs: Message[] = [];
  msgsTelaCadastro: Message[] = [];
  acoesRelacionadas: any[];
  columnOptions: SelectItem[];
  clienteSelecionado: ClienteComponent[];
  lancamento: any = [];

  cols = [
   // { field: 'id', header: 'id', style: 'col-id'},
    { field: 'nome', header: 'CLIENTE', style: 'col-nome-cliente' },
   // { field: 'name_user', header: 'COMERCIAL', style: 'col-comercial-cliente' },
    { field: 'tipo_cliente', header: 'TIPO CLIENTE', style: 'col-tipo-cliente' },
    { field: 'cnpj', header: 'CNPJ/CPF', style: 'col-cnpj-cliente' },
    { field: 'cpf', header: 'CPF', style: 'col-cpf' },
    //{ field: 'inscricao_estadual', header: 'Incricão Est.', style: 'col-inscricao-estadual'},
    //{ field: 'endereco', header: 'Endereço', style: 'col-endereco' },
    //{ field: 'bairro', header: 'Bairro', style: 'col-bairro' },
    { field: 'localidade', header: 'CIDADE/UF', style: 'col-cidade-uf-cliente' },
    //{ field: 'id_estado', header: 'Estado', style: 'col-estado' },
   // { field: 'email', header: 'Email', style: 'col-email' },
   // { field: 'site', header: 'Site', style: 'col-site'},
   // { field: 'name', header: 'Email', style: 'col-email' },
    { field: 'telefone', header: 'TELEFONE', style: 'col-telefone-cliente' },
    //{ field: 'celular', header: 'Ceular', style: 'col-celular' },
   // { field: 'id_seguimento', header: 'Seguimento', style: 'col-seguimento' },
    { field: 'status', header: 'STATUS', style: 'col-status-cliente'},
    //{ field: 'id_user', header: 'ID User', style: 'col-id_user' },
   // { field: ' created_at', header: 'Criação', style: 'col-data' },
   // { field: 'updated_at', header: 'Atualização', style: 'col-data' },

  ];


  constructor(
    private clienteService: ClienteService,
    private confirmation: ConfirmationService,
    private title: Title,
    private breadcrumbService: BreadcrumbService,
    private usuarioSistema: AuthService,
  ) {



    this.breadcrumbService.setItems([
      { label: 'Clientes / Cadastrar Clientes' },
  ]);
  }
  empresas = [
    { label: 'NewsGPS', value: '1' },
    { label: 'Quadri Systems', value: '2' }
  ];

  teste() {
alert('sdjkb');
  }
  salvar(form: FormControl) {
    this.clienteService.salvar(this.dadosCliente)
      .toPromise()
      .then((res: Response) => {
        if (`${res.status}` === '400') {
        this.msgsTelaCadastro.push({severity: 'error', summary:  `${res. statusText}`, detail:''});
        }else {
        this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Cliente salvo com sucesso.' });
        this.listar();
        this.fecharMensagem();
        form.reset();
        this.display = false;
        }
      })
      .catch(erro =>
        this.msgsTelaCadastro.push({ severity: 'error', summary: 'Ops!', detail: 'Cliente já cadastrado na base de dados!!' }));
       this.fecharMensagem();
  }


  buscarPorId(id: number) {
      this.clienteService.buscarPorId(id)
      .then(dadosCliente => {
        if (dadosCliente.status === 1) {
          dadosCliente.status = true;
        }
        if (dadosCliente.status === 0) {
          dadosCliente.status = false;
        }
        if (dadosCliente.tipo_cliente === 'PF') {
          this.mostraOpcaoTipoEmpresaPF = true;
          this.mostraOpcaoTipoEmpresaPJ = false;
        }
        if (dadosCliente.tipo_cliente === 'PJ') {
          this.mostraOpcaoTipoEmpresaPF = false;
          this.mostraOpcaoTipoEmpresaPJ = true;
        }
        this.dadosCliente = dadosCliente;
      })
      .catch(erro =>
        this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar o cliente!' }));
    this.fecharMensagem();
  }


  listar() {
    this.clienteService.lista()
      .then(clientes => {
      for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].tipo_cliente === 'PF') {
          clientes[i].tipo_cliente = 'Pessoa Física';
        }
        if (clientes[i].tipo_cliente === 'PJ') {
          clientes[i].tipo_cliente = 'Empresa';
        }
      }
        this.clientes = clientes;
      })
      .then(total => this.total = this.clientes.length)
      .catch(erro =>
        this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar os clientes!' }));
  }


  excluir(cliente: any) {
    this.clienteService.excluir(cliente.id)
      .then(() => {
        this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Cliente excluido !' });
        this.listar();
        this.fecharMensagem();
      })
      .catch(erro =>
        this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar excluir o cliente '}));
        this.listar();
        this.fecharMensagem();
  }


  confirmarExclusao(cliente: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(cliente);
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
      this.msgs = [];
    }, 7000);
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
    this.dadosCliente = new Clientes(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
    this.display = param;
  }


  showDialogClose(param: boolean, form: FormControl) {
    this.limparFormulario(form);
    this.msgsTelaCadastro = [];
    this.msgs = [];
    this.display = param;
    this.mostraOpcaoTipoEmpresaPJ = true;
    this.mostraOpcaoTipoEmpresaPF = true;
  }



  getUserSistema() {
    this.nomeUsuarioLogado = this.usuarioSistema.getUser().name;
    this.idUsuarioLogado = this.usuarioSistema.getUser().id;
    this.idEmpresaUsuarioLogado = this.usuarioSistema.getUser().id_cliente;
  }

  buscarPorCEP() {
    this.clienteService.buscarPorCEP(this.dadosCliente.cep)
    .then(dadosCliente => {
      if (dadosCliente.erro === true) {
        this.msgsTelaCadastro.push({ severity: 'error', summary: 'Ops! ', detail: 'CEP não existe' });
      } else {
      this.dadosCliente.logradouro = dadosCliente.logradouro;
      this.dadosCliente.complemento = dadosCliente.complemento;
      this.dadosCliente.bairro = dadosCliente.bairro;
      this.dadosCliente.localidade = dadosCliente.localidade;
      this.dadosCliente.uf = dadosCliente.uf;
      this.dadosCliente.cep = dadosCliente.cep;
      }
    })
    .catch(erro =>
      this.msgsTelaCadastro.push({ severity: 'error', summary: 'Ops! ', detail: 'CEP imcompleto' }));
      this.fecharMensagem();

  }


  ngOnInit() {
    this.title.setTitle('Clientes');
    this.listar();



    this.columnOptions = [];
    for (let i = 0; i < this.cols.length; i++) {
      this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
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

