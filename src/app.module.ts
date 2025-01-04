import { Module } from '@nestjs/common';
import { EquipmentModule } from './equipment/equipment.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.94le5.mongodb.net/controleGarantia?retryWrites=true&w=majority&appName=Cluster0',
    ),
    EquipmentModule,
    UserModule,
  ],
})
export class AppModule {}
