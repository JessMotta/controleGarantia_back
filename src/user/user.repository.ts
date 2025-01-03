import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async salve(user: UserEntity) {
    this.users.push(user);
  }

  async getAll() {
    return this.users;
  }

  async userExists(name: string) {
    const possibleUser = this.users.find((user) => user.Nome === name);
    return possibleUser !== undefined;
  }
}
