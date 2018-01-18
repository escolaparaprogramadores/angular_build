import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Permissao } from '../permissao.component';
import * as moment from 'moment';

@Injectable()
export class PermissaoService {

  constructor(private httpCliente: HttpClient) { }

  salvar(dados: Permissao) {
    return !dados.id ? this.httpCliente.post(`${environment.urlBase}/admin/permissao/`, dados) :
      this.httpCliente.put(`${environment.urlBase}/admin/permissao/${dados.id}`, dados);
  }


  buscarPorId(id: number): Promise<any> {
    return this.httpCliente.get(`${environment.urlBase}/admin/permissao/${id}`)
      .toPromise()
      .then(response => {
        const permissao = response as Permissao;
        this.converterStringsParaDatas([permissao]);
        return permissao;
      });
    }

  lista(): Promise<any> {
    return this.httpCliente.get(`${environment.urlBase}/admin/permissao`)
      .toPromise()
      .then(response => response);
  }


  excluir(id: number): Promise<void> {
    return this.httpCliente.delete(`${environment.urlBase}/admin/permissao/${id}`)
      .toPromise()
      .then(() => null);
  }

  private converterStringsParaDatas(permissoes: Permissao[]) {
    for (const permissao of permissoes) {
      permissao.created_at = moment(permissao.created_at,
        'YYYY-MM-DD, h:mm:ss a').toDate();

        if (permissao.updated_at) {
          permissao.updated_at = moment(permissao.updated_at,
            'YYYY-MM-DD, h:mm:ss a').toDate();
        }
    }
  }
}

