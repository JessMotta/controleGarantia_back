import { Module } from '@nestjs/common';
import { EquipmentController } from './equipment.controller';
import { EquipmentRepository } from './equipment.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipmentSchema } from 'src/schemas/equipment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'equipments', schema: EquipmentSchema },
    ]),
  ],
  controllers: [EquipmentController],
  providers: [EquipmentRepository],
})
export class EquipmentModule {}
