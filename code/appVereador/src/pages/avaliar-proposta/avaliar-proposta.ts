import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AvaliarProposta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-avaliar-proposta',
  templateUrl: 'avaliar-proposta.html'
})
export class AvaliarPropostaPage {
  propostas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicializarItens();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliarPropostaPage');
  }

  inicializarItens() {
    this.propostas = [];
    this.propostas.push({
      titulo: "Asfaltamento",
      descricao: "Asfaltar rua",
      foto: "../../imagens/ruaEsburacada.jpg",
      bairro: "Centenário",
      rua: "Sem Nome",
      apoios: 10,
      apoiada: false
    });
    this.propostas.push({
      titulo: "Reparos",
      descricao: "Concertar Poste",
      foto: "../../imagens/posteQueimado.png",
      bairro: "Santa Mônica",
      rua: "Sem Nome",
      apoios: 2,
      apoiada: true

    });
    this.propostas.push({
      titulo: "Contrução",
      descricao: "Construir UPA",
      foto: null,
      bairro: "Ponto Central",
      rua: "getúlio Vargas",
      apoios: 40,
      apoiada: false
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.inicializarItens();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.propostas = this.propostas.filter((item) => {
        return (item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }
}
