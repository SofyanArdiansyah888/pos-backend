import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as argon2 from 'argon2';
import { env } from 'process';
import { PrismaService } from '../prisma/prisma.service';
import { AuthInput } from './input/auth.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async signup(input: AuthInput) {
    // generate the password hash
    const password = await argon2.hash(input.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: input.email,
          password,
        },
      });

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(input: AuthInput): Promise<{ access_token: string }> {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: input.email,
      },
    });
    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');

    // compare password
    const pwMatches = await argon2.verify(user.password, input.password);
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15d',
      secret: env.SECRET_KEY,
    });

    return {
      access_token: token,
    };
  }
}
