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

  async updateUser(id: string, dataOfUpated: Partial<UserEntity>) {
    const possibleUser = this.users.find((userSalved) => userSalved.id === id);

    if (!possibleUser) {
      throw new Error('Usuário não encontrado');
    }
    Object.entries(dataOfUpated).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      possibleUser[key] = value;
    });
    return possibleUser;
  }
}
