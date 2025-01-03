import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() dataUser: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.id = uuid();
    userEntity.Nome = dataUser.Nome;
    userEntity.Senha = dataUser.Senha;

    this.userRepository.salve(userEntity);
    return { id: userEntity.id, message: 'Usuário criado com sucesso' };
  }

  @Get()
  async getAllUsers() {
    return this.userRepository.getAll();
  }
}
