import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async login(payload: LoginDto) {
    const user = await this.userModel
      .findOne({
        username: payload.username,
      })
      .exec();
    if (!user) throw new Error('User not found');
    if (user.password !== payload.password) throw new Error('Invalid password');
    return user;
  }
}
