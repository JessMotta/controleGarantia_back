import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { UniqueName } from '../validation/name-unique.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @UniqueName({ message: 'Nome de usuário já existe' })
  @IsOptional()
  Nome: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @IsOptional()
  Senha: string;
}
