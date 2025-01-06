import { IsNotEmpty } from 'class-validator';

export class updateEquipmentDTO {
  @IsNotEmpty({ message: 'O campo Nome do Equipamento não pode ser vazio' })
  Equipamento: string;
  @IsNotEmpty({ message: 'O campo Local de Retirada não pode ser vazio' })
  Local_Retirado: string;
  @IsNotEmpty({ message: 'O campo Coordenador não pode ser vazio' })
  Coordenador_UFV: string;
  @IsNotEmpty({ message: 'O campo Responsável não pode ser vazio' })
  Pessoa_Atualizacao: string;
}
