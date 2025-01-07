import { Document } from 'mongoose';

export interface EquipmentEntity extends Document {
  Equipamento: string;
  Local_Retirado: string;
  Coordenador_UFV: string;
  Pessoa_SetorResponsavel: string;
  Data_Retirada: string;
  Local_Enviado: string;
  Local_Devolucao: string;
  Destinatario: string;
  Data_Devolucao: string;
  Data_Instalacao: string;
  Observacao: string;
  Pessoa_Atualizacao: string;
}
