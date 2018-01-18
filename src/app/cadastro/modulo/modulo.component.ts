import { ModuloService } from './services/modulo.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SelectItem, Message, ConfirmationService } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from '../../breadcrumb.service';
import { AuthService } from '../../auth/services/auth.service';

export class Modulo {
  constructor(nome: string, id_user: number, id_cliente: number ) {
    this.id_usuario = id_user;
    this.id_cliente = id_cliente;
    this.name_user = nome;
  }
  id: number;
  modulo: string;
  id_usuario: number;
  id_cliente: number;
  name_user: string;
  created_at: Date;
  updated_at: Date;
}

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  idEmpresaUsuarioLogado: number;
  nomeUsuarioLogado: string;
  idUsuarioLogado: number;
  pt: any = [];
  modulos: any = [];
  dadosModulos = new Modulo(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
  dadosModulo = new Modulo(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
  display = false;
  msgs: Message[] = [];
  msgsTelaCadastro: Message[] = [];
  acoesRelacionadas: any[];
  columnOptions: SelectItem[];
  moduloSelecionado: ModuloComponent[];

  cols = [
    { field: 'modulo', header: 'MODULO', style: 'col-modulo' },
  ];


  constructor(
    private confirmation: ConfirmationService,
    private title: Title,
    private breadcrumbService: BreadcrumbService,
    private usuarioSistema: AuthService,
    private moduloService: ModuloService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Permissões / Modulos' }
    ]);
  }


  salvar(form: FormControl) {
    this.moduloService
      .salvar(this.dadosModulo)
      .toPromise()
      .then((res: Response) => {
        if (`${res.status}` === '400') {
        this.msgsTelaCadastro.push({severity: 'error', summary: `${res. statusText}`, detail: ''});
        }else {
        this.msgs.push({severity: 'success', summary: 'Sucesso!',  detail: 'Modulo salvo com sucesso.'});
        this.listar();
        this.fecharMensagem();
        form.reset();
        this.display = false;
       }
      })
      .catch(erro =>
        this.msgsTelaCadastro.push({severity: 'error', summary: 'Ops!', detail: ' Erro ao tentar salvar o Mudulo '})
      );
    this.fecharMensagem();
  }

  buscarPorId(id: number) {
    this.moduloService
      .buscarPorId(id)
      .then(dadosModulo => {
        this.dadosModulo = dadosModulo;
      })
      .catch(erro =>
        this.msgs.push({severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar o modulo!'})
      );
    this.fecharMensagem();
  }

  listar() {
    this.moduloService.lista()
      .then(modulos => (this.modulos = modulos))
      .catch(erro =>
        this.msgs.push({severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar os modulos!'})
      );
  }

  excluir(modulo: any) {
    this.moduloService.excluir(modulo.id)
      .then(() => {
        this.msgs.push({severity: 'success', summary: 'Sucesso!', detail: 'Modulo excluido !'
        });
        this.listar();
        this.fecharMensagem();
      })
      .catch(erro =>
        this.msgs.push({severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar o modulo!'})
      );
    this.listar();
    this.fecharMensagem();
  }

  confirmarExclusao(modulo: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(modulo);
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
    this.dadosModulos = new Modulo(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
    this.dadosModulo = new Modulo(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
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
    this.title.setTitle('Modulos');
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

