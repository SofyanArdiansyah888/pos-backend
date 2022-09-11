import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthToken } from './entities/auth_token.entity';
import { AuthInput } from './input/auth.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthToken)
  signin(@Args('authInput') data: AuthInput) {
    return this.authService.signin(data);
  }

  @Mutation(() => AuthToken)
  signup(@Args('authInput') data: AuthInput) {
    return this.authService.signup(data);
  }
}
