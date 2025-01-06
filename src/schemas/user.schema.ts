import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class User{
  @Prop({required: true})
  Nome: string;
  
  @Prop({unique: true, required: true})
  Email: string;

  @Prop({minlength: 6, required: true})
  Senha: string;
};

export const UserSchema = SchemaFactory.createForClass(User);
