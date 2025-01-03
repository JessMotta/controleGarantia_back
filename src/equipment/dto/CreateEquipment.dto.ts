import { IsNotEmpty } from 'class-validator';

export class CreateEquipmentDTO {
  @IsNotEmpty({ message: 'O campo Nome do Equipamento não pode ser vazio' })
  Equipamento: string;
  @IsNotEmpty({ message: 'O campo Local de Retirada não pode ser vazio' })
  Local_Retirado: string;
  @IsNotEmpty({ message: 'O campo Coordenador não pode ser vazio' })
  Coordenador_UFV: string;
}
