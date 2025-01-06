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
  Pessoa_Atualizacao: string;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
