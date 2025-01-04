import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UniqueEmail } from '../validation/email-unique.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  Nome: string;
  
  @IsNotEmpty({message: 'O email não pode ser vazio' })
  @UniqueEmail({ message: 'Email de usuário já existe' })
  @IsEmail()
  Email: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  Senha: string;
}
