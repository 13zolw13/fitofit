import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { RegisterUserDto } from 'src/dto/registerUserDto';

@Injectable()
export class UserService {
  findOne(id: string) {
    return this.user.findById(id);
  }
  constructor(@InjectModel(User.name) private user: Model<UserDocument>) {}

  async create(user: RegisterUserDto): Promise<UserDocument> {
    return await this.user.create(user);
  }
}
