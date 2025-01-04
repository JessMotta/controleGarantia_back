import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserEntity>) {}


  async salve(user: UserEntity) {
    const createdUser = new this.userModel(user);
    console.log(createdUser);
    return await createdUser.save();
  }

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  // async userExists(email: string) {
  //   const possibleUser = await this.userModel.find(
  //     (user) => user.Email === email,
  //   );
  //   return possibleUser !== undefined;
  // }

  async updateUser(id: string, dataOfUpated: Partial<UserEntity>) {
    await this.userModel.updateOne({ _id: id }, dataOfUpated).exec();
    return this.getById(id);
  }

  async deleteUser(id: string) {
    return await this.userModel.deleteOne({ _id: id }).exec();
  }
}
