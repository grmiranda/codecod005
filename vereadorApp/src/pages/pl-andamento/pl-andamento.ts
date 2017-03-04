import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform  } from 'ionic-angular';
import { ProjetoDeLei } from '../../model/projeto-de-lei';
import { NovaPlPage } from '../nova-pl/nova-pl';


@Component({
  selector: 'page-pl-andamento',
  templateUrl: 'pl-andamento.html'
})
export class PlAndamentoPage {

  private pls: ProjetoDeLei[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform) {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlAndamentoPage');
  }

  private novoPL(){
    this.navCtrl.push(NovaPlPage);
  }

  private like(pl: ProjetoDeLei) {
    
  }

  private dislike(pl: ProjetoDeLei) {
    
  }


  private abrirOpcoes(pl: ProjetoDeLei) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      buttons: [
        {
          text: 'Reprovar',
          role: 'destructive',
          handler: () => {
          }
        },
        {
          text: 'Aprovar',
          handler: () => {
          }
        },
        {
          text: 'Cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

}