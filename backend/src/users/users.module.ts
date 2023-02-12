import { Publication } from 'src/publications/entities/publication.entity';
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
imports: [TypeOrmModule.forFeature([User ,Publication])],
providers: [UsersService, AuthService, JwtService],
controllers: [UsersController],
})
export class UsersModule {}
