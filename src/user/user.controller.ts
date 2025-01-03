import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/usuarios')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() dataUser) {
    this.userRepository.salve(dataUser);
    return dataUser;
  }

  @Get()
  async getAllUsers() {
    return this.userRepository.getAll();
  }
}
