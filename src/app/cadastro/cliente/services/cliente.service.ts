import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { environment } from '../../../../environments/environment';
import 'rxjs/Rx';
import { UsingObservable } from 'rxjs/observable/UsingObservable';

import { Clientes } from '../cliente/cliente.component';



@Injectable()
export class ClienteService {
  constructor(private httpCliente: HttpClient, private http: Http) { }

// SALVAR
  salvar(dados: Clientes) {
    return !dados.id ? this.httpCliente.post(`${environment.urlBase}/admin/cliente/`, dados) :
      this.httpCliente.put(`${environment.urlBase}/admin/cliente/${dados.id}`, dados);
  }

// BUSCA POR CEP
buscarPorCEP(cep: number): Promise<any> {
  return this.httpCliente.get( `https://viacep.com.br/ws/${cep}/json/`  )
    .toPromise()
    .then(response => {
      return response;
    });
  }

// BUSCA POR ID
buscarPorId(id: number): Promise<any> {
  return this.httpCliente.get(`${environment.urlBase}/admin/cliente/${id}`)
    .toPromise()
    .then(response => {
      const cliente = response as Clientes;
      this.converterStringsParaDatas([cliente]);
      return cliente;
    });
  }

// LISTAR TODOS
  lista(): Promise<any> {
    return this.httpCliente.get(`${environment.urlBase}/admin/cliente`)
      .toPromise()
      .then(response => response);
  }

// EXCLUIR POR ID
  excluir(id: number): Promise<void> {
    return this.httpCliente.delete(`${environment.urlBase}/admin/cliente/${id}`)
      .toPromise()
      .then(() => null);
  }

// CONVERTE STRING PARA DATE E EXIBE NA TELA
  private converterStringsParaDatas(clientes: Clientes[]) {
    for (const cliente of clientes) {
      cliente.created_at = moment(cliente.created_at,
        'YYYY-MM-DD, h:mm:ss a').toDate();

        if (cliente.updated_at) {
          cliente.updated_at = moment(cliente.updated_at,
            'YYYY-MM-DD, h:mm:ss a').toDate();
        }
    }
  }

/*
  // BUSCA POR CNPJ
  buscarPorEmpresa(id: number): Promise<any> {
    const headers = new HttpHeaders;
    headers.append('Authorization', 'Bearer 70aad321cbe78edeae3a94b7c43e8f324f561b8800501728735c5f235a1f1070');
    return this.httpCliente.get( 'https://www.receitaws.com.br/v1/cnpj/' + id+'/?callback=?', {headers})
      .toPromise()
      .then(response => {
        const cliente = response as Clientes;
        //this.converterStringsParaDatas([cliente]);
        return cliente;
      });
    }
*/
}
