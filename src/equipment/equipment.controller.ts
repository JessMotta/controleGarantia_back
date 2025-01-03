import { Body, Controller, Get, Post } from '@nestjs/common';
import { EquipmentRepository } from './equipment.repository';

@Controller('/equipamentos')
export class EquipmentController {
  constructor(private equipmentRepository: EquipmentRepository){}
  @Post()
  async createEquipment(@Body() dataEquipment) {
    this.equipmentRepository.salve(dataEquipment);
    return dataEquipment;
  }

  @Get()
  async getEquipments() {
    return this.equipmentRepository.getEquipments();
  }
}
