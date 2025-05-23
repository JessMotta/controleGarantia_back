import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EquipmentRepository } from './equipment.repository';
import { CreateEquipmentDTO } from './dto/CreateEquipment.dto';
import { ListEquipmentsDTO } from './dto/ListEquipments.dto';
import { updateEquipmentDTO } from './dto/UpdateEquipment.dto';

@Controller('/equipamentos')
export class EquipmentController {
  constructor(private equipmentRepository: EquipmentRepository) {}
  @Post()
  async createEquipment(@Body() dataEquipment: CreateEquipmentDTO) {
    return await this.equipmentRepository.create(dataEquipment);
  }

  @Get()
  async getEquipments() {
    const allEquipments = await this.equipmentRepository.getAll();
    const equipmentList = allEquipments.map(
      (equipment) =>
        new ListEquipmentsDTO(
          equipment.id,
          equipment.Equipamento,
          equipment.Local_Retirado,
          equipment.Coordenador_UFV,
          equipment.Pessoa_SetorResponsavel,
          equipment.Data_Retirada,
          equipment.Local_Enviado,
          equipment.Local_Devolucao,
          equipment.Destinatario,
          equipment.Data_Devolucao,
          equipment.Data_Instalacao,
          equipment.Observacao,
          equipment.Pessoa_Atualizacao,
        ),
    );
    return equipmentList;
  }

  @Get('/:id')
  async getEquipmentById(@Param('id') id: string) {
    const oneEquipment = await this.equipmentRepository.getById(id);
    const equipmentData = new ListEquipmentsDTO(
      oneEquipment.id,
      oneEquipment.Equipamento,
      oneEquipment.Local_Retirado,
      oneEquipment.Coordenador_UFV,
      oneEquipment.Pessoa_SetorResponsavel,
      oneEquipment.Data_Retirada,
      oneEquipment.Local_Enviado,
      oneEquipment.Local_Devolucao,
      oneEquipment.Destinatario,
      oneEquipment.Data_Devolucao,
      oneEquipment.Data_Instalacao,
      oneEquipment.Observacao,
      oneEquipment.Pessoa_Atualizacao,
    );
    return equipmentData;
  }

  @Put('/:id')
  async updateEquipment(
    @Param('id') id: string,
    @Body() dataToUpdate: updateEquipmentDTO,
  ) {
    const equipmentUpdated = await this.equipmentRepository.updateEquipment(
      id,
      dataToUpdate,
    );

    return {
      equipment: equipmentUpdated,
      message: 'Equipamento atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async deleteEquipment(@Param('id') id: string) {
    const equipmentDeleted = await this.equipmentRepository.deleteEquipment(id);
    return {
      equipment: equipmentDeleted,
      message: 'Equipamento excluído com sucesso',
    };
  }
}
