import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as moment from 'moment';
import { Modulo } from '../modulo.component';

@Injectable()
export class ModuloService {

  constructor(private httpCliente: HttpClient) { }

  salvar(dados: Modulo) {
    return !dados.id ? this.httpCliente.post(`${environment.urlBase}/admin/modulo/`, dados) :
      this.httpCliente.put(`${environment.urlBase}/admin/modulo/${dados.id}`, dados);
  }


  buscarPorId(id: number): Promise<any> {
    return this.httpCliente.get(`${environment.urlBase}/admin/modulo/${id}`)
      .toPromise()
      .then(response => {
        const modulo = response as Modulo;
        this.converterStringsParaDatas([modulo]);
        return modulo;
      });
    }

  lista(): Promise<any> {
    return this.httpCliente.get(`${environment.urlBase}/admin/modulo/`)
      .toPromise()
      .then(response => response);
  }


  excluir(id: number): Promise<void> {
    return this.httpCliente.delete(`${environment.urlBase}/admin/modulo/${id}`)
      .toPromise()
      .then(() => null);
  }

  private converterStringsParaDatas(modulos: Modulo[]) {
    for (const modulo of modulos) {
      modulo.created_at = moment(modulo.created_at,
        'YYYY-MM-DD, h:mm:ss a').toDate();

        if (modulo.updated_at) {
          modulo.updated_at = moment(modulo.updated_at,
            'YYYY-MM-DD, h:mm:ss a').toDate();
        }
    }
  }
}

