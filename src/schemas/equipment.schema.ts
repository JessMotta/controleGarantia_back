import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Equipment {
  @Prop({ required: true })
  Equipamento: string;

  @Prop({ required: true })
  Local_Retirado: string;

  @Prop({ required: true })
  Coordenador_UFV: string;

  @Prop({ required: true })
  Pessoa_SetorResponsavel: string;

  @Prop({ required: true })
  Data_Retirada: string;

  @Prop({ required: true })
  Local_Enviado: string;

  @Prop({ required: true })
  Local_Devolucao: string;

  @Prop({ required: true })
  Destinatario: string;

  @Prop({ required: true })
  Data_Devolucao: string;

  @Prop({ required: true })
  Data_Instalacao: string;

  @Prop({ required: true })
  Observacao: string;

  @Prop({ required: true })
  Pessoa_Atualizacao: string;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
