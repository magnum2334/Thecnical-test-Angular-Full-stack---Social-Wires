/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import bcrypt from 'bcrypt';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async loginUser(user: any) {
    
    const payload = { email: user.email, password: user.password };
    const secretOrPrivateKey = 'secretOrPrivateKey'
    const token = jwt.sign(payload, secretOrPrivateKey, { expiresIn: '48h' });
    let loginUser
    if (token) {
      loginUser = await this.userRepository.find({
        where: {
          email: payload.email,
        },
      })
      return {
        user: loginUser,
        accessToken: token,
      };
    } else {
      throw new HttpException({
        message: 'Validation failed',
        errors: loginUser.map(err => ({ field: err.property, message: err.constraints[Object.keys(err.constraints)[0]] })),
      },
        HttpStatus.BAD_REQUEST);
    }

  }

  findAll() {
    return `This action returns all auth`;
  }
  validateUser() {
    return;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
