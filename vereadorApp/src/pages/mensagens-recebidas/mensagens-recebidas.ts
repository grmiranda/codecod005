import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, PopoverController, ToastController } from 'ionic-angular';
import { EnviarMensagemPage } from '../enviar-mensagem/enviar-mensagem';
import { MensagemService } from '../../providers/mensagem-service';
import { StorageService } from '../../providers/storage';
import { CorpoMensagem } from '../../model/mensagem';
import { ModalController } from 'ionic-angular';
import { ModalAbrirMensagemPage } from '../modal-abrir-mensagem/modal-abrir-mensagem';
import { ModalOpcoesPage } from '../modal-opcoes/modal-opcoes';
import { Usuario } from '../../model/user';
/*
  Generated class for the MensagensRecebidas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mensagens-recebidas',
  templateUrl: 'mensagens-recebidas.html'
})
export class MensagensRecebidasPage {

  private mensagens: CorpoMensagem[];
  private selecao: boolean = false;
  private primeiro: boolean = false;
  private mensagensSelecionadas: CorpoMensagem[] = [];

  constructor(
    public navCtrl: NavController,
    private mensagemService: MensagemService,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private storageService: StorageService,
    public actionSheetCtrl: ActionSheetController,
    public popoverCtrl: PopoverController
    private toastCtrl: ToastController
  ) {

  }

  ionViewDidEnter() {
    this.carregar();
  }

  enviarMensagem() {
    this.navCtrl.push(EnviarMensagemPage);
  }

  carregar() {

     this.storageService.get().then(res => {
       this.mensagemService.getMensagemRecebida(res.IDUsuario).then(res => {
         this.mensagens = res;
       });
     });

  }

  private doRefresh(refresher) {
    this.carregar();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  corBackground(mensagem: CorpoMensagem) {
    if (!this.selecao) {
      if (mensagem.lida == 0) {
        return '#ed9e1e';
      } else {
        return '#ffffff';
      }
    } if (this.mensagensSelecionadas.indexOf(mensagem) != -1) {
      return '#0066ff';
    } else {
      return '#ffffff';
    }
  }

  abrirMensagem(mensagemSelecionada: CorpoMensagem) {

    if (!this.selecao) {
      if (mensagemSelecionada.lida == 0) {
        this.mensagemService.ler(mensagemSelecionada.id);
      }
      mensagemSelecionada.lida = 1;
      let modal = this.modalCtrl.create(ModalAbrirMensagemPage, { mensagem: mensagemSelecionada });
      modal.onDidDismiss(data => {
        if (data == "excluir") {
          this.mensagemService.deletar("1", mensagemSelecionada.id).then(res => {
            if (res == true) {
              this.carregar();
              let toast = this.toastCtrl.create({
                message: 'Mensagem apagada com sucesso',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            }
          })
        } else if (data == "enviar") {
          console.log(data);
        }
      });
      modal.present();

    } else {
      if (!this.primeiro) {
        let index = this.mensagensSelecionadas.indexOf(mensagemSelecionada);
        if (index == -1) {
          this.mensagensSelecionadas.push(mensagemSelecionada);
        } else {
          this.mensagensSelecionadas.splice(index, 1);
          if (this.mensagensSelecionadas.length == 0) {
            this.selecao = false;
          }
        }
      } else {
        this.primeiro = false;
      }
    }
  }

  opcoesMsg(mensagem: CorpoMensagem) {
    this.selecao = true;
    this.mensagensSelecionadas.push(mensagem);
    this.primeiro = true;
  }

  openOptions(event: any) {
    let popover = this.popoverCtrl.create(ModalOpcoesPage, { opcoes: ['Opção 1', 'Opção 2', 'Opção 3'] });
    let ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: '10'
          };
        }
      }
    };
    popover.present({ev: event});
  }
}
