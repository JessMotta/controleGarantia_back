/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { ListUsersDTO } from './dto/ListUsers.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';

@Controller('/usuarios')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() dataUser: CreateUserDTO)  {
   return await this.userRepository.createUser(dataUser);
}


  @Get()
  async getAllUsers() {
    const allUsers = await this.userRepository.getAll();
    const usersList = allUsers.map(
      (user) => new ListUsersDTO(user.id, user.Nome, user.Email),
    );
    return usersList;
  }
  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    const oneUser = await this.userRepository.getById(id);
    const userData = new ListUsersDTO(oneUser.id, oneUser.Nome, oneUser.Email);
    return userData;
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
