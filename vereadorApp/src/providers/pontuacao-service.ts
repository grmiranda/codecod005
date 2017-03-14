import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Publicacao } from '../model/publicacao';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PontuacaoService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

  }

  public pontuarUsuario(IDUsuario: number, tipo: number): Promise<any>{
    return this.http
      .post('http://www.dsoutlet.com.br/apiLuiz/addPontuacao.php', JSON.stringify({IDUsuario: IDUsuario, tipo: tipo}), { headers: this.headers })
      .toPromise()
      .then(res => this.extractData(res))
      .catch(this.handleErrorMessage);
  }

  private extractData(res: Response) {
    let retorno = { error: false, message: '' };
    let data = res.json();
    if (data === true) {
      retorno.message = 'Pontuação efetuada!';
    } else {
      retorno.error = true;
      retorno.message = 'Ocorreu um erro!';
    }
    return retorno;
  }

  public getRank(): Promise<any> {
    return this.http.get('http://www.dsoutlet.com.br/apiLuiz/getPontuacao.php?rank')
      .toPromise()
      .then(response => this.extractRankData(response))
      .catch(this.handleErrorMessage);
  }

  private extractRankData(res: Response) {
    let retorno = { error: false, data: [] };
    let data = res.json();
    if (data == null) {
      retorno.error = true;
    } else {
      retorno.data = data;
    }
    return retorno;
  }

  public getPontuacao(id: number): Promise<any> {
    return this.http.get('http://www.dsoutlet.com.br/apiLuiz/getPontuacao.php?id='+id)
      .toPromise()
      .then(response => this.extractGetData(response))
      .catch(this.handleErrorMessage);
  }

  private extractGetData(res: Response) {
    let retorno = { error: false, data: 0 };
    let data = res.json();
    if (data == null) {
      retorno.error = true;
    } else {
      retorno.data = data;
    }
    return retorno;
  }

  private handleErrorMessage(error: any) {
    let retorno = { error: false, data: 'Ocorreu um erro!' };
    return retorno;
  }

}
