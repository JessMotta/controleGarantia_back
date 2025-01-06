import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserEntity>,
  ) {}

  async createUser(user: CreateUserDTO): Promise<UserEntity> {
    const createdUser = await new this.userModel(user);
    return createdUser.save();
  }

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async userExists(email: string) {
    try {
      const possibleUser = await this.userModel
        .findOne({ Email: email })
        .exec();
      return possibleUser !== undefined;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async updateUser(id: string, dataOfUpated: Partial<UserEntity>) {
    await this.userModel.updateOne({ _id: id }, dataOfUpated).exec();
    return this.getById(id);
  }

  async deleteUser(id: string) {
    return await this.userModel.deleteOne({ _id: id }).exec();
  }
}
