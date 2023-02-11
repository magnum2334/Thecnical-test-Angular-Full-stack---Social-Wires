/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import bcrypt from 'bcrypt';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService ,
  ) {}

  async loginUser(user: any) {
    //carga de datos para generar el token
    const payload = { username: user.username, password: user.password };
    const token = this.jwtService.sign(payload);
    
    return {
        accessToken: token,
    };
  }
  findAll() {
    return `This action returns all auth`;
  }
  validateUser(id: any){
    return 'This action adds a new auth';
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
