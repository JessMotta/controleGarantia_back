/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUsersDTO } from './dto/ListUsers.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';

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
    return {
      user: new ListUsersDTO(userEntity.id, userEntity.Nome),
      message: 'Usuário criado com sucesso',
    };
  }

  @Get()
  async getAllUsers() {
    const allUsers = await this.userRepository.getAll();
    const usersList = allUsers.map(
      (user) => new ListUsersDTO(user.id, user.Nome),
    );
    return usersList;
  }
@Put('/:id')
  async updateUser(@Param('id') id: string, @Body() dataToUpdate: UpdateUserDTO) {
    const userUpdated = await this.userRepository.updateUser(id, dataToUpdate);

    return {
      user: userUpdated,
      message: 'Usuário atualizado com sucesso'
    }

  }
  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
   const userDeleted = await this.userRepository.deleteUser(id);
    return {
      user: userDeleted,
      message: 'Usuário deletado com sucesso'
    }
  }
}
