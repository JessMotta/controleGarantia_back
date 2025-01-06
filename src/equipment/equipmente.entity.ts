import { Document } from 'mongoose';

export interface EquipmentEntity extends Document {
  Equipamento: string;
  Local_Retirado: string;
  Coordenador_UFV: string;
  Pessoa_Atualizacao: string;
}
