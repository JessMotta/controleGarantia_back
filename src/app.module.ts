import { Module } from '@nestjs/common';
import { EquipmentModule } from './equipment/equipment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [EquipmentModule, UserModule],
})
export class AppModule {}
