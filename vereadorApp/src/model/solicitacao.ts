export class Solicitacao {

  public IDSolicitacao: number;
  public titulo: string = "";
  public descricao: string = "";
  public fotoURL: string = "";
  public fotos: string[] = [];
  public andamento: string = "";
  public dataEntrada: string = "";
  public dataRealizacao: string = "";
  public estado: string;
  public IDUsuario: number = 8;
  public Push;
  public pushs = [];
  public ids = [];
  public nomeUsuario:string = "";
  public fotoUsuario:string = "";

  constructor() {

  }
}
