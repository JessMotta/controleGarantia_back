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

  async userExists(email: string) {
    const possibleUser = this.users.find((user) => user.Email === email);
    return possibleUser !== undefined;
  }

  private findById(id: string) {
    const possibleUser = this.users.find((userSalved) => userSalved.id === id);

    if (!possibleUser) {
      throw new Error('Usuário não encontrado');
    }

    return possibleUser;
  }

  async updateUser(id: string, dataOfUpated: Partial<UserEntity>) {
    const user = this.findById(id);
    Object.entries(dataOfUpated).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      user[key] = value;
    });
    return user;
  }

  async deleteUser(id: string) {
    const user = this.findById(id);
    this.users = this.users.filter((userSalved) => userSalved.id !== id);
    return user;
  }
}
