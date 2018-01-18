
import { User } from './../../../auth/interfaces/user.model';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { environment } from '../../../../environments/environment';
import 'rxjs/Rx';
import { UsingObservable } from 'rxjs/observable/UsingObservable';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { Users } from '../usuarios.component';


@Injectable()
export class UsuarioService {



  constructor(private httpCliente: HttpClient) { }

  salvar(dados: Users) {
    return !dados.id ? this.httpCliente.post(`${environment.urlBase}/auth/user/`, dados) :
      this.httpCliente.put(`${environment.urlBase}/auth/user/${dados.id}`, dados);
  }


  buscarPorId(id: number): Promise<any> {
    return this.httpCliente.get(`${environment.urlBase}/auth/user/` + id)
      .toPromise()
      .then(response => {
        const usuario = response as Users;
        this.converterStringsParaDatas([usuario]);
        return usuario;
      });
    }

  lista(): Promise<any> {
    return this.httpCliente.get(`${environment.urlBase}/auth/user`)
      .toPromise()
      .then(response => response);
  }



  excluir(id: number): Promise<void> {
    return this.httpCliente.delete(`${environment.urlBase}/auth/user/${id}`)
      .toPromise()
      .then(() => null);
  }

  private converterStringsParaDatas(usuarios: Users[]) {
    for (const usuario of usuarios) {
      usuario.created_at = moment(usuario.created_at,
        'YYYY-MM-DD, h:mm:ss a').toDate();

        if (usuario.updated_at) {
          usuario.updated_at = moment(usuario.updated_at,
            'YYYY-MM-DD, h:mm:ss a').toDate();
        }
    }
  }
}
