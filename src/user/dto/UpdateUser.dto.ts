import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
//import { UniqueEmail } from '../validation/email-unique.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  Nome: string;
  
  @IsNotEmpty({ message: 'O email não pode ser vazio' })
 // @UniqueEmail({ message: 'Email de usuário já existe' })
  @IsEmail({}, { message: 'Email inválido' })
  @IsOptional()
  Email: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @IsOptional()
  Senha: string;
}
