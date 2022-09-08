import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';

import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from '../user/user.service';



@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      secret:"123",
      signOptions:{expiresIn: '2d'}
    })
  ],
  providers: [AuthResolver, AuthService, JwtStrategy,UserService],
  exports:[AuthService]
})
export class AuthModule {}
