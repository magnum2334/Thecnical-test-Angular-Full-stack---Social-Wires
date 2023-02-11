/* eslint-disable prettier/prettier */
// auth.module.ts

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/strategy/jwt.strategy';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '5m' }, //Esta es la duración de expiración que tendrá un token
    }),
  ],
  exports:[AuthService],
  controllers: [],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
