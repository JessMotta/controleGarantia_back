import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  Nome: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  Senha: string;
}
