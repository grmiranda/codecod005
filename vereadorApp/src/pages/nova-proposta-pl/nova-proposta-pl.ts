import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { ProjetoDeLei } from '../../model/projeto-de-lei';
import { ProjetoDeLeiService } from '../../providers/pl-service';

@Component({
  selector: 'page-nova-proposta-pl',
  templateUrl: 'nova-proposta-pl.html'
})
export class NovaPropostaPlPage {

  private pl: ProjetoDeLei = new ProjetoDeLei();
  private myID = 8;

  constructor(public navCtrl: NavController,
    public projetoDeLeiService: ProjetoDeLeiService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) { }

  ionViewWillEnter() {
    // this.storage.get().then(res => {
    //   this.myID = res.IDUsuario;
    // });
  }

  private finalizar() {
    if (this.pl.titulo.trim() == '') {
      this.displayToast("Adicione um título à Proposta");
    } else if (this.pl.ementa.trim() == '') {
      this.displayToast("Adicione uma ementa à Proposta");
    } else {
      this.pl.estado = 'sa';
      this.pl.IDUsuario = this.myID;
      this.projetoDeLeiService.addProjetoDeLei(this.pl).then(res => {
        if (!res.error && res.value) {
          this.displayToast("Proposta enviada para avaliação");
          this.navCtrl.pop();
        } else {
          //error - falta de conexão / tentar novamente
          this.showConfirm();
        }
      });
    }
  }

  private displayToast(mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  private showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Falha na conexão',
      message: 'Tentar Novamente ?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Ok',
          handler: () => {
            this.finalizar();
          }
        }
      ]
    });
    confirm.present();
  }
}
