import { Component } from '@angular/core';
import { ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { Depoimento } from '../../model/depoimento';
import { DepoimentoService } from '../../providers/depoimento-service';


@Component({
  selector: 'page-avaliar-depoimento',
  templateUrl: 'avaliar-depoimento.html'
})
export class AvaliarDepoimentoPage {

  private depoimentos: Depoimento[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private depoimentoService: DepoimentoService,
    public actionSheetCtrl: ActionSheetController
    ) {
      this.depoimentoService.getDepoimentoAvaliar().then(depoi=>{
        console.log(depoi);
        this.depoimentos = depoi;
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliarDepoimentoPage');
  }

  private abrirOpcoes(depoimento: any) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      buttons: [
        {
          text: 'Negar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            
          }
        },
        {
          text: 'Aprovar',
          icon: 'checkmark-circle',
          handler: () => {
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });

    actionSheet.present();
  }

}
