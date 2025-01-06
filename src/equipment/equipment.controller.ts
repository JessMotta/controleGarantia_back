import { Body, Controller, Get, Post } from '@nestjs/common';
import { EquipmentRepository } from './equipment.repository';
import { CreateEquipmentDTO } from './dto/CreateEquipment.dto';
import { ListEquipmentsDTO } from './dto/ListEquipments.dto';

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
          equipment.Pessoa_Atualizacao,
        ),
    );
    return equipmentList;
  }
}
