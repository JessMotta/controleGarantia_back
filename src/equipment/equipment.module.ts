import { Module } from '@nestjs/common';
import { EquipmentController } from './equipment.controller';
import { EquipmentRepository } from './equipment.repository';

@Module({
  controllers: [EquipmentController],
  providers:[EquipmentRepository]
})
export class EquipmentModule {}
