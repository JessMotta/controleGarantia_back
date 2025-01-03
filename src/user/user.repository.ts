import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async salve(user) {
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
