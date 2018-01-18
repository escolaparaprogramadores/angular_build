import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin.component';
import { AuthGuard } from '../../guards/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../../auth/login/login.component';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from '../../cadastro/usuarios/usuarios.component';
import { PessoasPesquisaComponent } from '../../pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { PermissaoComponent } from '../../cadastro/permissao/permissao.component';
import { ModuloComponent } from '../../cadastro/modulo/modulo.component';
import { FuncionalidadeComponent } from '../../cadastro/funcionalidade/funcionalidade.component';
import { ClienteComponent } from '../../cadastro/cliente/cliente/cliente.component';



@NgModule({
  imports: [

    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'usuarios',
            component: UsuariosComponent
          },

          {
            path: 'permissao',
            component: PermissaoComponent
          },

          {
            path: 'modulo',
            component: ModuloComponent
          },

            {
            path: 'funcionalidade',
            component: FuncionalidadeComponent
          },

          {
          path: 'cliente',
          component: ClienteComponent
        }

        ]
      }
    ])
  ],

  declarations: [],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
