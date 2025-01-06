import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EquipmentEntity } from './equipmente.entity';
import { CreateEquipmentDTO } from './dto/CreateEquipment.dto';
import { Model } from 'mongoose';

@Injectable()
export class EquipmentRepository {
  constructor(
    @InjectModel('equipments')
    private readonly equipmentModel: Model<EquipmentEntity>,
  ) {}

  async create(equipment: CreateEquipmentDTO): Promise<EquipmentEntity> {
    const createdEquipment = await new this.equipmentModel(equipment);
    return createdEquipment.save();
  }

  async getAll() {
    return await this.equipmentModel.find().exec();
  }
}
