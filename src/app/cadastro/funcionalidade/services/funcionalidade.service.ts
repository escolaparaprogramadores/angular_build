import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable()
export class FuncionalidadeService {

  constructor(private http: Http, private httpCliente: HttpClient) { }

  lista(): Promise<any> {
    return this.httpCliente.get(`${environment.urlBase}/admin/funcionalidade`)
      .toPromise()
      .then(response => response);
    // console.log(response);
  }

  cadastro(dados: any) {
    //console.log(dados);
    return this.httpCliente.post(`${environment.urlBase}/admin/funcionalidade`, dados)
      .map(data => data);
  }

  excluir(id: number): Promise<void> {
    //alert(id);
    return this.httpCliente.delete(`${environment.urlBase}/admin/funcionalidade/${id}`)
      .toPromise()
      .then(() => null);
  }

}
