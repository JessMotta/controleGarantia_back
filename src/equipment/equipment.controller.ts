import { Body, Controller, Get, Post } from '@nestjs/common';
import { EquipmentRepository } from './equipment.repository';
import { CreateEquipmentDTO } from './dto/CreateEquipment.dto';

@Controller('/equipamentos')
export class EquipmentController {
  constructor(private equipmentRepository: EquipmentRepository){}
  @Post()
  async createEquipment(@Body() dataEquipment: CreateEquipmentDTO) {
    this.equipmentRepository.createUser(dataEquipment);
    return dataEquipment;
  }

  @Get()
  async getEquipments() {
    return this.equipmentRepository.getEquipments();
  }
}
