import { IsNotEmpty } from 'class-validator';

export class CreateEquipmentDTO {
  @IsNotEmpty({ message: 'O campo Nome do Equipamento não pode ser vazio' })
  Equipamento: string;

  @IsNotEmpty({ message: 'O campo Local de Retirada não pode ser vazio' })
  Local_Retirado: string;

  @IsNotEmpty({ message: 'O campo Coordenador não pode ser vazio' })
  Coordenador_UFV: string;

  @IsNotEmpty({
    message: 'O campo Pessoa Setor Responsável não pode ser vazio',
  })
  Pessoa_SetorResponsavel: string;

  @IsNotEmpty({ message: 'O campo Data de Retirada não pode ser vazio' })
  Data_Retirada: string;

  @IsNotEmpty({ message: 'O campo Local Enviado não pode ser vazio' })
  @IsNotEmpty({ message: 'O campo Local de Devolução não pode ser vazio' })
  Local_Enviado: string;

  @IsNotEmpty({ message: 'O campo Local de Devolução não pode ser vazio' })
  Local_Devolucao: string;

  @IsNotEmpty({ message: 'O campo Destinatario não pode ser vazio' })
  Destinatario: string;

  @IsNotEmpty({ message: 'O campo Data de Devolução não pode ser vazio' })
  Data_Devolucao: string;

  @IsNotEmpty({ message: 'O campo Data de Instalacao não pode ser vazio' })
  Data_Instalacao: string;

  @IsNotEmpty({ message: 'O campo Observacao não pode ser vazio' })
  Observacao: string;

  @IsNotEmpty({ message: 'O campo Pessoa Atualização não pode ser vazio' })
  Pessoa_Atualizacao: string;
}
