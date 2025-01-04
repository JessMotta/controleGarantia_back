import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  Nome: String,
  Email: String,
  Senha: String,
});
