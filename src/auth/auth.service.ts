import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';;
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService:JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOne({
      email,
    });
    return user;

    // if (user && user.password === password) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return null;
  }

  async login(user: UserEntity) {
    const payload = { email: user.email, sub: user.id };

    return {
        access_token: this.jwtService.sign(payload),
    };
}
}
