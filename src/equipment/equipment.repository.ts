import { Injectable } from '@nestjs/common';

@Injectable()
export class EquipmentRepository {
  private equipments = [];

  async createUser(equipment) {
    this.equipments.push(equipment);
  }

  async getEquipments() {
    return this.equipments;
  }
}
