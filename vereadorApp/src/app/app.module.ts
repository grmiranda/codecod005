import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { SolicitacoesPage } from '../pages/solicitacoes/solicitacoes';
import { SolicAprovadosPage } from '../pages/solic-aprovados/solic-aprovados';
import { SolicPropostasPage } from '../pages/solic-propostas/solic-propostas';
import { SolicSolicitadosPage } from '../pages/solic-solicitados/solic-solicitados';
import { SolicReprovadosPage } from '../pages/solic-reprovados/solic-reprovados';
import { RequerimentoPage } from '../pages/requerimento/requerimento';
import { AvaliarSolicitacaoPage } from '../pages/avaliar-solicitacao/avaliar-solicitacao';
import { NovaPropostaPage } from '../pages/nova-proposta/nova-proposta';
import { NovaPublicacaoPage } from '../pages/nova-publicacao/nova-publicacao';
import { PublicacaoPage } from '../pages/publicacao/publicacao';
import { EditarPublicacaoPage } from '../pages/editar-publicacao/editar-publicacao';
import { FotoService } from '../providers/foto-service';
import { PublicacaoService } from '../providers/publicacao-service';
import { SolicitacaoService } from '../providers/solicitacao-service';
import { MensagensRecebidasPage } from '../pages/mensagens-recebidas/mensagens-recebidas';
import { MensagensEnviadasPage } from '../pages/mensagens-enviadas/mensagens-enviadas';
import { TabMensagemPage } from '../pages/tab-mensagem/tab-mensagem';
import { EnviarMensagemPage } from '../pages/enviar-mensagem/enviar-mensagem';
import { MensagemService } from '../providers/mensagem-service';
import { RequerimentoService } from '../providers/requerimento-service';

//login com o google e com o facebook
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { GooglePlusService } from '../providers/google-plus-service';
import { Facebook } from 'ionic-native';
import { FacebookService } from '../providers/facebook-service';
import { StorageService } from '../providers/storage';
import { Storage } from '@ionic/storage';

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
    EditarPublicacaoPage,
    SolicAprovadosPage,
    SolicPropostasPage,
    SolicReprovadosPage,
    SolicSolicitadosPage,
    NovaPropostaPage,
    AvaliarSolicitacaoPage,
    RequerimentoPage,
    MensagensRecebidasPage,
    MensagensEnviadasPage,
    TabMensagemPage,
    EnviarMensagemPage
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
    EditarPublicacaoPage,
    SolicAprovadosPage,
    SolicPropostasPage,
    SolicReprovadosPage,
    SolicSolicitadosPage,
    NovaPropostaPage,
    AvaliarSolicitacaoPage,
    RequerimentoPage,
    MensagensRecebidasPage,
    MensagensEnviadasPage,
    TabMensagemPage,
    EnviarMensagemPage
  ],

  providers: [Facebook, MensagemService, Storage, StorageService, CadastroService, FotoService, FacebookService, PublicacaoService, SolicitacaoService, RequerimentoService, {provide: ErrorHandler, useClass: IonicErrorHandler}, GooglePlusService]

})
export class AppModule {}
