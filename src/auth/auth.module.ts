import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';

import { JwtModule } from '@nestjs/jwt';

import { env } from 'process';
import { JwtStrategy } from './strategy';





@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      secret: env.SECRET_KEY,
      signOptions:{expiresIn: '2d'}
    })
  ],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
