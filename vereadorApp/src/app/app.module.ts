import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { SolicitacoesPage } from '../pages/solicitacoes/solicitacoes';
import { NovaPublicacaoPage } from '../pages/nova-publicacao/nova-publicacao';
import { PublicacaoPage } from '../pages/publicacao/publicacao';
import { EditarPublicacaoPage } from '../pages/editar-publicacao/editar-publicacao';
import { Facebook } from 'ionic-native';
import { FacebookService } from '../providers/facebook-service';
import { FotoService } from '../providers/foto-service';
import { PublicacaoService } from '../providers/publicacao-service';

//login com o google e com o facebook
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { GooglePlusService } from '../providers/google-plus-service';


import { CadastroService } from '../providers/cadastro-service';


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'f3c01288'
  },
  'auth': {
    'google': {
      'webClientId': '381691927831-4kh7e0baks3r21nejp4ob45gvmm9guf1.apps.googleusercontent.com',
      'scope': []
    }

  }
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    SolicitacoesPage,
    NovaPublicacaoPage,
    PublicacaoPage,
    EditarPublicacaoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    SolicitacoesPage,
    NovaPublicacaoPage,
    PublicacaoPage,
    EditarPublicacaoPage
  ],
  providers: [Facebook, CadastroService, FotoService, FacebookService, PublicacaoService, {provide: ErrorHandler, useClass: IonicErrorHandler}, GooglePlusService]
})
export class AppModule {}
