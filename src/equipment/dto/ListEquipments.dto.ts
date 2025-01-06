export class ListEquipmentsDTO {
  constructor(
    readonly id: string,
    readonly Equipamento: string,
    readonly Local_Retirado: string,
    readonly Coordenador_UFV: string,
    readonly Pessoa_Atualizacao: string,
  ) {}
}
