import { Document } from "mongoose";
export interface UserEntity extends Document{
  Nome: string;
  Email: string;
  Senha: string;
}
