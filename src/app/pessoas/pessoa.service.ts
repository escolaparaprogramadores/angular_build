import { Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';


export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private http: Http) { }



  pesquisar(): Promise<any> {
    const headers = new Headers();
   // tslint:disable-next-line:max-line-length
   headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTEzODc3MzQ5LCJhdXRob3JpdGllcyI6WyJST0xFX0FUVUFMSVpBUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiZGRmYzI3ZWItMTI0Ni00N2JlLTlkYzYtNGE2ODkzNDViNGFmIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.lrwffx0zujGqh5xBIZISUY29dLiHq9zi-uwn9xb_4s8');
   return this.http.get(`${this.pessoasUrl}?listar`, { headers })
      .toPromise()
      .then(response => response.json());
      }


      listarTodas(): Promise<any> {
        const headers = new Headers();
        // tslint:disable-next-line:max-line-length
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTEzODc3MzQ5LCJhdXRob3JpdGllcyI6WyJST0xFX0FUVUFMSVpBUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiZGRmYzI3ZWItMTI0Ni00N2JlLTlkYzYtNGE2ODkzNDViNGFmIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.lrwffx0zujGqh5xBIZISUY29dLiHq9zi-uwn9xb_4s8');
        return this.http.get(this.pessoasUrl, { headers })
          .toPromise()
          .then(response => response.json());
      }



      excluir(codigo: number): Promise<void> {
        const headers = new Headers();
        // tslint:disable-next-line:max-line-length
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTEzODc3MzQ5LCJhdXRob3JpdGllcyI6WyJST0xFX0FUVUFMSVpBUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiZGRmYzI3ZWItMTI0Ni00N2JlLTlkYzYtNGE2ODkzNDViNGFmIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.lrwffx0zujGqh5xBIZISUY29dLiHq9zi-uwn9xb_4s8');
        return this.http.delete(`${this.pessoasUrl}/${codigo}`, { headers })
          .toPromise()
          .then(() => null);
      }


      mudarStatus(codigo: number, ativo: boolean): Promise<void> {
        const headers = new Headers();
        // tslint:disable-next-line:max-line-length
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTEzODc3MzQ5LCJhdXRob3JpdGllcyI6WyJST0xFX0FUVUFMSVpBUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiZGRmYzI3ZWItMTI0Ni00N2JlLTlkYzYtNGE2ODkzNDViNGFmIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.lrwffx0zujGqh5xBIZISUY29dLiHq9zi-uwn9xb_4s8');
        headers.append('Content-Type', 'application/json');
        return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers })
          .toPromise()
          .then(() => null);
      }
  }






