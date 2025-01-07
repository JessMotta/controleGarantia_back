export class ListEquipmentsDTO {
  constructor(
    readonly id: string,
    readonly Equipamento: string,
    readonly Local_Retirado: string,
    readonly Coordenador_UFV: string,
    readonly Pessoa_SetorResponsavel: string,
    readonly Data_Retirada: string,
    readonly Local_Enviado: string,
    readonly Local_Devolucao: string,
    readonly Destinatario: string,
    readonly Data_Devolucao: string,
    readonly Data_Instalacao: string,
    readonly Observacao: string,
    readonly Pessoa_Atualizacao: string,
  ) {}
}
