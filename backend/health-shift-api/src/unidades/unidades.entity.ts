export class UnidadeEntity {
  id: number;
  nomeUnidade: string;
  horaAbertura: string;
  horaFechamento: string;
  fotoUri: string;
  endereco: {
    log: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    CEP: string;
  };
  localizacao: {
    lat: number;
    lon: number;
  };
  email: string;
  telefone: string;
  responsavel: string;
}
