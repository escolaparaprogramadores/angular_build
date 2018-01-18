

import { ConfirmationService } from 'primeng/components/common/api';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/primeng';
import { PessoaService } from '../pessoas/pessoa.service';
import { CategoriaService } from '../categorias/categoria.service';
import { ClienteService } from '../cadastro/cliente/services/cliente.service';






@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
  ],
  declarations: [],
  exports: [
    ConfirmDialogModule
  ],
  providers: [
    PessoaService,
    CategoriaService,
    ConfirmationService,
    ClienteService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
