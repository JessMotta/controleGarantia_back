import { IsNotEmpty, MinLength } from 'class-validator';
import { UniqueName } from '../validation/name-unique.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @UniqueName({ message: 'Nome de usuário já existe' })
  Nome: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  Senha: string;
}
